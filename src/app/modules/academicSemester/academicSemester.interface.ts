import { Model } from 'mongoose'

type Month =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december'

export type IAcademicSemester = {
  title: 'autumn' | 'summer' | 'fall'
  year: number
  code: '01' | '02' | '03'
  startMonth: Month
  endMonth: Month
}

export type AcademicSemesterModel = Model<IAcademicSemester>
