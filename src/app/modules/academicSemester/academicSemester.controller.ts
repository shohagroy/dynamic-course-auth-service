import { RequestHandler } from 'express'
import { creareAcademicSemesterService } from './academicSemester.service'

export const creareAcademicSemester: RequestHandler = async (
  req,
  res,
  next
) => {
  const { ...academicSemesterData } = req.body
  try {
    const result = await creareAcademicSemesterService(academicSemesterData)
    res.status(201).json({
      status: 'success',
      message: 'Academic Semister create successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
