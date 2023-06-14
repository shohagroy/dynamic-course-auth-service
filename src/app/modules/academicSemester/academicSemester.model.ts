import { model, Schema } from 'mongoose'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface'

const Month = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      enum: ['autumn', 'summer', 'fall'],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      enum: ['01', '02', '03'],
      required: true,
    },
    startMonth: {
      type: String,
      enum: Month,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Month,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
