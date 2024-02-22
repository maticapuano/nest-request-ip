import { Module } from "@nestjs/common";
import { RequestIpModule } from "../module";
import { AppController } from "./app.controller";

@Module({
  imports: [
    RequestIpModule.forRoot({
      localIpAddress: "76.76.21.123",
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
