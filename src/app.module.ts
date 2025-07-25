import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RespondentsModule } from './respondents/respondents.module';
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://gen_user:iihdA%405(2i%3E,%3A(@188.225.58.18:27017/default_db?authSource=admin&directConnection=true',
    ),
    RespondentsModule,
    SurveysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
