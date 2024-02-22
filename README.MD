# Nest Request IP

Nest Request IP is a convenient Nest.js module that allows you to effortlessly retrieve information from HTTP requests, including client IP addresses, user agents, browsers, and operating systems. With this module, you can enhance your Nest.js application's functionality by gaining insights into the characteristics of incoming requests.

## Features

- Get IP from HTTP requests
- Discover agent, browser, device, OS, etc.
- Get `city`, `country`, `region`, `timezone` from IP

## Installation

```bash
npm install nest-request-ip --save
```

## Usage

app.module.ts

```typescript
import { Module } from "@nestjs/common";
import { RequestIpModule } from "nest-request-ip";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    RequestIpModule.forRoot({
      localIpAddress: "76.76.21.123", // this ip is used when the request is local
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

app.controller.ts

```typescript
import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import {
  GetClientIp,
  GetClientAgent,
  GetClientBrowser,
  GetClientSystem,
} from "nest-request-ip";

@Controller()
export class AppController {
  @Get()
  getHello(@GetClientIp() ip: ClientInfo) {
    return ip;
  }

  @Get("agent")
  getAgent(@GetClientAgent() agent: string) {
    return agent;
  }

  @Get("browser")
  getBrowser(@GetClientBrowser() browser: string) {
    return browser;
  }

  @Get("system")
  getSystem(@GetClientSystem() system: string) {
    return system;
  }
}
```

## License

[MIT licensed](LICENSE).
