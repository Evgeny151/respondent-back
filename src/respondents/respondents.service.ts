// respondents/respondents.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Respondent } from './schemas/respondent.schema';

@Injectable()
export class RespondentsService {
  constructor(
    @InjectModel(Respondent.name)
    private readonly respondentModel: Model<Respondent>,
  ) {}

  async findAll() {
    return (await this.respondentModel.find().exec()).map((respondent) => {
      console.log('respondent', respondent);
      const { telegram_id, reg_answers } = respondent;
      return {
        telegram_id,
        gender: reg_answers.gender,
        age: reg_answers.age,
        city: reg_answers.city,
        education: reg_answers.education,
        education_two: reg_answers.education_two,
        occupation: reg_answers.occupation,
        unemployed: reg_answers.unemployed,
        period: reg_answers.period,
        student: reg_answers.student,
        student_job: reg_answers.student_job,
        self_employed: reg_answers.self_employed,
        employment: reg_answers.employment,
        freelance_employment: reg_answers.freelance_employment,
        freelance_work: reg_answers.freelance_work,
        field_work: reg_answers.field_work,
        income: reg_answers.income,
        job_device: reg_answers.job_device,
        leisure_device: reg_answers.leisure_device,
        research: reg_answers.research,
        platform: reg_answers.platform,
        time: reg_answers.time,
      };
    });
  }
}
