// respondents/respondents.controller.ts
import { Controller, Get } from '@nestjs/common'
import { RespondentsService } from './respondents.service'

@Controller('respondents')
export class RespondentsController {
  constructor(private readonly respondentsService: RespondentsService) {}

  @Get()
  async findAll() {
    return this.respondentsService.findAll()
  }
}
