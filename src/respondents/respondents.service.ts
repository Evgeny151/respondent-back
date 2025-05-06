// respondents/respondents.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RespondentsService {
  constructor(
    @InjectModel('Respondent') private readonly respondentModel: Model<any>,
  ) {}

  async findAll() {
    return this.respondentModel.find().exec();
  }
}
