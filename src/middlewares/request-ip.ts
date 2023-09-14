import { ClientInfo } from "@/types/client-info";
import { Request } from "@/types/request";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";
import { getClientIp } from "request-ip";
import userAgent from "useragent";

@Injectable()
export class RequestIpMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction): void {
    const clientIp = getClientIp(req) || "127.0.0.1";

    res.setHeader("X-Request-IP", clientIp);

    const agent = userAgent.parse(req.headers["user-agent"] || "");

    const clientInfo: ClientInfo = {
      ip: clientIp,
      browser: agent.family,
      os: agent.os.family,
      agent: agent.source,
    };

    req.clientInfo = clientInfo;

    next();
  }
}
