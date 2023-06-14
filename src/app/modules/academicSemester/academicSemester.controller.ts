import { NextFunction, Request, Response } from 'express'
import catchAsuncFn from '../../../shared/catchAsync'
import { creareAcademicSemesterService } from './academicSemester.service'

export const creareAcademicSemester = catchAsuncFn(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body

    const result = await creareAcademicSemesterService(academicSemesterData)

    next()
    res.status(201).json({
      status: 'success',
      message: 'Academic Semister create successfully',
      data: result,
    })
  }
)
