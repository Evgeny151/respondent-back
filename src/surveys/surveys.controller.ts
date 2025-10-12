import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Controller('surveys')
export class SurveysController {
  private readonly logger = new Logger(SurveysController.name);

  constructor(
    private readonly surveysService: SurveysService,
    private readonly httpService: HttpService, // для запросов к боту
    private readonly configService: ConfigService,
  ) {}

  @Post()
  async create(@Body() createSurveyDto: CreateSurveyDto) {
    const survey = await this.surveysService.create({
      ...createSurveyDto,
      completed: false,
      inProgress: false,
    });

    const botUrl = this.configService.get<string>('BOT_URL');

    this.logger.debug(`botUrl: ${botUrl}`);

    firstValueFrom(
      this.httpService.post<{ success: boolean }>(`${botUrl}/notify`, {
        respondents: createSurveyDto.respondents.map((item) => Number(item)),
        survey_id: survey._id,
      }),
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
