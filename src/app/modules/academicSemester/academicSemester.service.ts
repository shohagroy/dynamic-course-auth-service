import { SortOrder } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import calculatePagination from '../../../helpers/paginationHealpers'
import { IGenericResponse } from '../../../inferfaces/common'
import { IPaginationOption } from '../../../inferfaces/pagination'
import {
  academicSemesterSearchableFilds,
  academicSemesterTitleCode,
} from './academicSemester.constant'
import {
  IAcademicSemester,
  IAcademicSemesterFilter,
} from './academicSemester.interface'
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

export const getAllSemestersByDb = async (
  filters: IAcademicSemesterFilter,
  paginationOptions: IPaginationOption
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { searchTrum, ...filtersData } = filters

  const andCondition = []

  if (searchTrum) {
    andCondition.push({
      $or: academicSemesterSearchableFilds.map(search => ({
        [search]: {
          $regex: searchTrum,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([filed, value]) => ({
        [filed]: value,
      })),
    })
  }

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions)

  const sortCondition: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder
  }

  const response = await AcademicSemester.find({ $and: andCondition })
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
  const data: IAcademicSemester[] = response
  const total = await AcademicSemester.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: data,
  }
}
