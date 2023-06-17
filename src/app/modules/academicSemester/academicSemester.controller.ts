import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import {
  IAcademicSemester,
  IAcademicSemesterFilter,
} from './academicSemester.interface'
import {
  creareAcademicSemesterService,
  getAllSemestersByDb,
} from './academicSemester.service'

import { IPaginationOption } from '../../../inferfaces/pagination'
import pick from '../../../shared/pick'
import paginationFinds from '../../../constants/pagination'
import { academicSemesterFilterableFilds } from './academicSemester.constant'

export const creareAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await creareAcademicSemesterService(academicSemesterData)

    sendResponse<IAcademicSemester>(res, {
      statusCode: 201,
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    })

    next()
  }
)

export const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters: IAcademicSemesterFilter = pick(
      req.query,
      academicSemesterFilterableFilds
    )

    const paginationOptions: IPaginationOption = pick(
      req.query,
      paginationFinds
    )

    const results = await getAllSemestersByDb(filters, paginationOptions)

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: 201,
      success: true,
      message: 'Semesters recvied successfully',
      meta: results.meta,
      data: results.data,
    })

    next()
  }
)
