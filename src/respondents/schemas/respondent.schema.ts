import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class RegAnswers {
  @Prop() username: string;
  @Prop() gender: string;
  @Prop() name: string;
  @Prop() age: string;
  @Prop() city: string;
  @Prop() education: string;
  @Prop() education_two: string;
  @Prop() occupation: string;
  @Prop() unemployed: string;
  @Prop() period: string;
  @Prop() student: string;
  @Prop() student_job: string;
  @Prop() self_employed: string;
  @Prop() employment: string;
  @Prop() freelance_employment: string;
  @Prop() freelance_work: string;
  @Prop() field_work: string;
  @Prop() income: string;
  @Prop() job_device: string;
  @Prop() leisure_device: string;
  @Prop() research: string;
  @Prop() platform: string;
  @Prop() time: string;
  @Prop() privacy: string;
}

export const RegAnswersSchema = SchemaFactory.createForClass(RegAnswers);

@Schema({ collection: 'respondents', timestamps: true })
export class Respondent {
  @Prop() telegram_id: string;
  @Prop() updated_at: string;
  @Prop({ type: RegAnswersSchema }) reg_answers: RegAnswers;
}

export const RespondentSchema = SchemaFactory.createForClass(Respondent);
