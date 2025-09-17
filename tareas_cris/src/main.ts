import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api"); // quedará /api/tasks
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // botamos campos basura
    forbidNonWhitelisted: true, // si mandan extra, 400
    transform: true,            // parsea strings a números/bools
  }));
  const port = parseInt(process.env.PORT || "4000", 10);
  await app.listen(port);
  console.log(`API corriendo en http://localhost:${port}/api`);
}
bootstrap();
