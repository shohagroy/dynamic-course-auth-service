import {
  IAcademicSemesterCodes,
  IAcademicSemesterMonths,
  IAcademicSemesterTitles,
} from './academicSemester.interface'

export const academicSemesterTitle: IAcademicSemesterTitles[] = [
  'autumn',
  'summer',
  'fall',
]

export const academicSemesterCode: IAcademicSemesterCodes[] = ['01', '02', '03']

export const academicSemesterMonth: IAcademicSemesterMonths[] = [
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

export const academicSemesterTitleCode: {
  [key: string]: string
} = {
  autumn: '01',
  summer: '02',
  fall: '03',
}
