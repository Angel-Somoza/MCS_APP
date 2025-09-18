import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Microservicio TCP para el API Gateway
  const tcpPort = parseInt(process.env.MS_TCP_PORT || "4010", 10);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: "0.0.0.0", port: tcpPort },
  });
  await app.startAllMicroservices();

  // REST HTTP para pruebas directas
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  const httpPort = parseInt(process.env.PORT || "4100", 10);
  await app.listen(httpPort);
  console.log(`HTTP: http://localhost:${httpPort}/api`);
  console.log(`TCP : ${tcpPort} listo para ClientProxy`);
}
bootstrap();
