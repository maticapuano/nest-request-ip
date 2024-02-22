import {
  DynamicModule,
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
} from "@nestjs/common";
import { MODULE_OPTIONS } from "./constants/module";
import { RequestIpMiddleware } from "./middlewares/request-ip";
import { RequestIpModuleOptions } from "./types/module";

@Global()
@Module({})
export class RequestIpModule implements NestModule {
  public static forRoot(options?: RequestIpModuleOptions): DynamicModule {
    return {
      module: RequestIpModule,
      providers: [
        {
          provide: MODULE_OPTIONS,
          useValue: options,
        },
        RequestIpMiddleware,
      ],
      exports: [RequestIpMiddleware],
    };
  }

  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestIpMiddleware).forRoutes("*");
  }
}
