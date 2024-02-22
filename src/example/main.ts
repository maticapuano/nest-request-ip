import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000, () => {
    Logger.log("Server is running on http://localhost:3000", "Bootstrap");
  });
};

bootstrap();
