import { model, Schema } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface'
import status from 'http-status-codes'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      enum: academicSemesterTitle,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      enum: academicSemesterCode,
      required: true,
    },
    startMonth: {
      type: String,
      enum: academicSemesterMonth,
      required: true,
    },
    endMonth: {
      type: String,
      enum: academicSemesterMonth,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })

  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Academic Semester Already exists')
  }

  next()
})

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
