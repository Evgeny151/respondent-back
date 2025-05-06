import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RespondentsModule } from './respondents/respondents.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://test:test@cluster0.httyobw.mongodb.net/survey_db?retryWrites=true&w=majority&appName=Cluster0',
    ),
    RespondentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
