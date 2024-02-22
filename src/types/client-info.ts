import { IpInfo } from "./ip-info";

export type ClientInfo = {
  ip: string;
  browser: string;
  os: string;
  agent: string;
  ipInfo: IpInfo | null;
};
