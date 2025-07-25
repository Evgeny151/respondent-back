type QuestionType = 'text' | 'single' | 'multi';

export class Question {
  id: number;
  text: string;
  type: QuestionType;
  options: string[];
}

export class CreateSurveyDto {
  respondents: string[];
  questions: Question[];
  researchDescription: Record<string, string>;
  completed: boolean;
  inProgress: boolean;
}
