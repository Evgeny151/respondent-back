import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator'

// Тип вопроса
export enum QuestionType {
  TEXT = 'text',
  SINGLE = 'single',
  MULTI = 'multi',
}

// Вопрос
@Schema({ _id: false }) // без _id у вложенных объектов
export class Question {
  @Prop({ required: true })
  @IsNumber()
  id: number

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  text: string

  @Prop({ required: true, enum: QuestionType })
  @IsEnum(QuestionType)
  type: QuestionType

  @Prop({ type: [String], default: [] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  options: string[]
}

export const QuestionSchema = SchemaFactory.createForClass(Question)

// Основная схема опроса
@Schema()
export class Survey extends Document {
  @Prop({ type: [String], required: true })
  @IsArray()
  @IsString({ each: true })
  respondents: string[]

  @Prop({ type: [QuestionSchema], required: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Question)
  questions: Question[]

  @Prop({ type: Object, required: true })
  @IsObject()
  researchDescription: Record<string, string>
}

export const SurveySchema = SchemaFactory.createForClass(Survey)
