import { MODULE_OPTIONS } from "@/constants/module";
import { ClientInfo } from "@/types/client-info";
import { RequestIpModuleOptions } from "@/types/module";
import { Request } from "@/types/request";
import { isLocalAddress } from "@/utils/is-local-address";
import {
  Inject,
  Injectable,
  NestMiddleware,
  Optional,
  Scope,
} from "@nestjs/common";
import { NextFunction, Response } from "express";
import geoip from "geoip-lite";
import { getClientIp } from "request-ip";
import userAgent from "useragent";

@Injectable({ scope: Scope.REQUEST })
export class RequestIpMiddleware implements NestMiddleware {
  public constructor(
    @Optional() @Inject(MODULE_OPTIONS) private options: RequestIpModuleOptions,
  ) {}

  public async use(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const clientIp = await this.getClientIp(req);

    res.setHeader("X-Request-IP", clientIp);

    const agent = userAgent.parse(req.headers["user-agent"] || "");

    const ipInfo = geoip.lookup(clientIp);

    const clientInfo: ClientInfo = {
      ip: clientIp,
      browser: agent.family,
      os: agent.os.family,
      agent: agent.source,
      ipInfo: {
        city: ipInfo?.city || "unknown",
        country: ipInfo?.country || "unknown",
        region: ipInfo?.region || "unknown",
        timezone: ipInfo?.timezone || "unknown",
      },
    };

    req.clientInfo = clientInfo;

    next();
  }

  private async getClientIp(req: Request): Promise<string> {
    const clientIp = getClientIp(req) || "127.0.0.1";

    if (isLocalAddress(clientIp) && this.options?.localIpAddress) {
      return this.options.localIpAddress;
    }

    return clientIp;
  }
}
