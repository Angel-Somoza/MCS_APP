import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Profesor, ProfesorSchema } from './schemas/profesor.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/profesoresdb'),
    MongooseModule.forFeature([{ name: Profesor.name, schema: ProfesorSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
