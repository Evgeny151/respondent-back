import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RespondentsModule } from './respondents/respondents.module';
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV}`, // например .env.local или .env.docker
        '.env', // fallback
      ],
    }),
    MongooseModule.forRoot(
      'mongodb://gen_user:iihdA%405(2i%3E,%3A(@188.225.58.18:27017/user_research?authSource=admin&directConnection=true',
    ),
    RespondentsModule,
    SurveysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
