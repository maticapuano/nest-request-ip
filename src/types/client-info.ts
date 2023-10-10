import { IpInfo } from "./ip-info";
import { Nullable } from "./nullable";

export type ClientInfo = {
  ip: string;
  browser: string;
  os: string;
  agent: string;
  ipInfo: Nullable<IpInfo>;
};
