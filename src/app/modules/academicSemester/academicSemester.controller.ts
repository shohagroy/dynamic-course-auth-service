import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import {
  IAcademicSemester,
  IAcademicSemesterFilter,
} from './academicSemester.interface'
import {
  creareAcademicSemesterService,
  deleteSingleSemesterService,
  getAllSemestersByDb,
  getSingleSemestersToDb,
  updateSingleSemesterService,
} from './academicSemester.service'

import { IPaginationOption } from '../../../inferfaces/pagination'
import pick from '../../../shared/pick'
import paginationFinds from '../../../constants/pagination'
import { academicSemesterFilterableFilds } from './academicSemester.constant'

export const creareAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemesterData } = req.body
    const result = await creareAcademicSemesterService(academicSemesterData)

    sendResponse<IAcademicSemester>(res, {
      statusCode: 201,
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    })
  }
)

export const getAllSemesters = catchAsync(
  async (req: Request, res: Response) => {
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
  }
)

export const getSingleSemesters = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await getSingleSemestersToDb(id)

    sendResponse<IAcademicSemester>(res, {
      statusCode: 201,
      success: true,
      message: 'Semester recvied successfully',
      data: result,
    })
  }
)

export const updateSingleSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body

    const result = await updateSingleSemesterService(id, updatedData)
    sendResponse<IAcademicSemester>(res, {
      statusCode: 201,
      success: true,
      message: 'Semester Updated successfully',
      data: result,
    })
  }
)

export const deleteSingleSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await deleteSingleSemesterService(id)
    sendResponse<IAcademicSemester>(res, {
      statusCode: 201,
      success: true,
      message: 'Semester Delete successfully',
      data: result,
    })
  }
)
