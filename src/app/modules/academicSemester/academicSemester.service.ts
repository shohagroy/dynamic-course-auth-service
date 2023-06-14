import ApiError from '../../../errors/ApiError'
import { academicSemesterTitleCode } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

export const creareAcademicSemesterService = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCode[payload.title] !== payload.code) {
    throw new ApiError(400, 'Invalid Semester Code')
  }
  const result = await AcademicSemester.create(payload)
  return result
}
