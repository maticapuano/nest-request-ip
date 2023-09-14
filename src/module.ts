import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { RequestIpMiddleware } from "./middlewares/request-ip";

@Global()
@Module({
  providers: [
    {
      provide: RequestIpMiddleware,
      useClass: RequestIpMiddleware,
    },
  ],
  exports: [],
})
export class RequestIpModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestIpMiddleware).forRoutes("*");
  }
}
