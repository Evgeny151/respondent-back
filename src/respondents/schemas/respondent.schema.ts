import { Schema } from 'mongoose';

export const RespondentSchema = new Schema({
  age: String,
  income_level: String,
  gender: String,
  answers: {
    type: Map,
    of: String,
  },
});
