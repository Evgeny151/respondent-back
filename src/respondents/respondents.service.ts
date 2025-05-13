// respondents/respondents.service.ts
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Respondent } from './schemas/respondent.schema'

@Injectable()
export class RespondentsService {
  constructor(
    @InjectModel('Respondent')
    private readonly respondentModel: Model<Respondent>,
  ) {}

  async findAll() {
    return (await this.respondentModel.find().exec()).map((respondent) => {
      return {
        _id: respondent._id,
        gender: respondent.gender,
        age: respondent.age,
        city: respondent.city,
        education: respondent.education,
        education_two: respondent.education_two,
        occupation: respondent.occupation,
        unemployed: respondent.unemployed,
        period: respondent.period,
        student: respondent.student,
        student_job: respondent.student_job,
        self_employed: respondent.self_employed,
        employment: respondent.employment,
        freelance_employment: respondent.freelance_employment,
        freelance_work: respondent.freelance_work,
        field_work: respondent.field_work,
        income: respondent.income,
        job_device: respondent.job_device,
        leisure_device: respondent.leisure_device,
        research: respondent.research,
        platform: respondent.platform,
        time: respondent.time,
      }
    })
  }
}
