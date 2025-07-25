import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Controller('surveys')
export class SurveysController {
  constructor(
    private readonly surveysService: SurveysService,
    private readonly httpService: HttpService, // для запросов к боту
  ) {}

  @Post()
  async create(@Body() createSurveyDto: CreateSurveyDto) {
    const survey = await this.surveysService.create({
      ...createSurveyDto,
      completed: false,
      inProgress: false,
    });

    console.log('Survey Создался', survey);

    firstValueFrom(
      this.httpService.post<{ success: boolean }>(
        'http://localhost:5050/notify',
        {
          respondents: createSurveyDto.respondents.map((item) => Number(item)),
          survey_id: survey._id,
        },
      ),
    ).catch((err: unknown) => {
      console.error(`Ошибка при отправке уведомления в чат`, err);
    });

    return { message: 'Анкета создана и уведомления отправлены' };
  }

  @Get()
  findAll() {
    return this.surveysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveyDto: UpdateSurveyDto) {
    return this.surveysService.update(+id, updateSurveyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveysService.remove(+id);
  }
}
