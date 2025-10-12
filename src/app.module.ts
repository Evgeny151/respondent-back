import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RespondentsModule } from './respondents/respondents.module';
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV}`, // например .env.local
        '.env', // fallback
      ],
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI');
        if (!uri) {
          throw new Error('❌ MONGODB_URI is not defined in .env file!');
        }
        return {
          uri,
        };
      },
    }),

    RespondentsModule,
    SurveysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
