// respondents/respondents.controller.ts
import { Controller, Get } from '@nestjs/common';
import { RespondentsService } from './respondents.service';

@Controller('respondents')
export class RespondentsController {
  constructor(private readonly respondentsService: RespondentsService) {}

  @Get('all')
  async getAll() {
    // return ''
    return this.respondentsService.findAll();
  }
}
