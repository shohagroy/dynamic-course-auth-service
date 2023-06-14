import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicSemester } from './academicSemester.interface'
import { creareAcademicSemesterService } from './academicSemester.service'

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
