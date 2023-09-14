import { ModuleNotRegistered } from "@/exceptions/module-not-registered";
import { ClientInfo } from "@/types/client-info";
import { Request } from "@/types/request";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";

/**
 * GetClientInfo Decorator
 *
 * The `@GetClientInfo` decorator is used to retrieve client information from the incoming HTTP request.
 * It extracts the client information from the request object and makes it available within your controller methods.
 *
 * @remarks
 * To use this decorator, make sure you have registered a middleware or process that populates the `clientInfo` property
 * on the incoming HTTP request. If the `clientInfo` property is not available, the decorator will throw a `ModuleNotRegistered` exception.
 *
 * @example
 * ```typescript
 * import { GetClientInfo } from 'nestjs-request-ip';
 *
 * @Controller()
 * export class AppController {
 *  @Get()
 *  remoteIp(@GetClientInfo() clientInfo: ClientInfo) {
 *    return clientInfo.ip;
 *  }
 * }
 * ```
 * @publicApi
 * @returns ClientInfo object
 * @throws ModuleNotRegistered - If the `clientInfo` property is not available on the incoming HTTP request.
 */
export const GetClientIp = (): ParameterDecorator => {
  return createParamDecorator(
    (data: unknown, ctx: ExecutionContext): ClientInfo => {
      const request = ctx.switchToHttp().getRequest<Request>();

      if (!request.clientInfo) throw new ModuleNotRegistered();

      return request.clientInfo;
    },
  )();
};
