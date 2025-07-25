import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RespondentsService } from './respondents.service';
import { RespondentsController } from './respondents.controller';
import { RespondentSchema } from './schemas/respondent.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Respondent', schema: RespondentSchema },
    ]),
  ],
  controllers: [RespondentsController],
  providers: [RespondentsService],
  exports: [RespondentsService],
})
export class RespondentsModule {}
