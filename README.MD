# Nest Request IP

## Features

- Get IP from HTTP requests
- Discover agent, browser, device, OS, etc.

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
  imports: [RequestIpModule],
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
