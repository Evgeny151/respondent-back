import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema()
export class Respondent {
  @Prop()
  to_send: string;

  @Prop()
  user_id: string;

  @Prop()
  username: string;

  @Prop()
  gender: string;
  @Prop()
  name: string;
  @Prop()
  age: string;
  @Prop()
  city: string;
  @Prop()
  education: string;
  @Prop()
  education_two: string;
  @Prop()
  occupation: string;
  @Prop()
  unemployed: string;
  @Prop()
  period: string;
  @Prop()
  student: string;
  @Prop()
  student_job: string;
  @Prop()
  self_employed: string;
  @Prop()
  employment: string;
  @Prop()
  freelance_employment: string;
  @Prop()
  freelance_work: string;
  @Prop()
  field_work: string;
  @Prop()
  income: string;
  @Prop()
  job_device: string;
  @Prop()
  leisure_device: string;
  @Prop()
  research: string;
  @Prop()
  platform: string;
  @Prop()
  time: string;
  @Prop()
  privacy: string;
  @Prop({ type: Map, of: String })
  answers: Map<string, string>;
}

export const RespondentSchema = SchemaFactory.createForClass(Respondent);

// export const RespondentSchema = new Schema({
//   to_send: String,
//   user_id: String,
//   username: String,
//   gender: String,
//   name: String,
//   age: String,
//   city: String,
//   education: String,
//   education_two: String,
//   occupation: String,
//   unemployed: String,
//   period: String,
//   student: String,
//   student_job: String,
//   self_employed: String,
//   employment: String,
//   freelance_employment: String,
//   freelance_work: String,
//   field_work: String,
//   income: String,
//   job_device: String,
//   leisure_device: String,
//   research: String,
//   platform: String,
//   time: String,
//   privacy: String,
//   answers: {
//     type: Map,
//     of: String,
//   },
// });
