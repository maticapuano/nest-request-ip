import { GetClientInfo, GetClientIp } from "@/decorators/request-ip";
import { ClientInfo } from "@/types/client-info";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  public endpoints(): Record<string, string> {
    return {
      ip: "http://localhost:3000/ip",
      ip_address: "http://localhost:3000/ip/address",
    };
  }

  @Get("ip")
  public getIp(@GetClientInfo() clientInfo: ClientInfo): ClientInfo {
    return clientInfo;
  }

  @Get("ip/address")
  public getIpAddress(@GetClientIp() ipAddress: string): string {
    return `Your IP address is: ${ipAddress}`;
  }
}
