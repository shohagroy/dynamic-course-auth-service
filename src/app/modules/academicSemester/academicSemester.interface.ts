import { Model } from 'mongoose'

export type IAcademicSemesterMonths =
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

export type IAcademicSemesterTitles = 'autumn' | 'summer' | 'fall'
export type IAcademicSemesterCodes = '01' | '02' | '03'

export type IAcademicSemester = {
  title: IAcademicSemesterTitles
  year: number
  code: IAcademicSemesterCodes
  startMonth: IAcademicSemesterMonths
  endMonth: IAcademicSemesterMonths
}

export type AcademicSemesterModel = Model<IAcademicSemester>

export type IAcademicSemesterFilter = {
  searchTrum?: string
}
