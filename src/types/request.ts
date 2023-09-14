import { Request as ExpressRequest } from "express";
import { ClientInfo } from "./client-info";

export type Request<T = unknown> = {
  clientInfo: ClientInfo;
} & ExpressRequest<T>;
