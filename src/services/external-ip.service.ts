import { HttpService } from "./http.service";

export class ExternalIpService {
  private static url = "https://api.ipify.org?format=json";

  public static async getRemoteIp(): Promise<string> {
    const remoteIp = await HttpService.get<{ ip: string }>(this.url);

    return remoteIp.ip;
  }
}
