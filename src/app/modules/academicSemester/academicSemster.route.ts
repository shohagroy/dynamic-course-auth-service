import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import {
  creareAcademicSemester,
  getAllSemesters,
  getSingleSemesters,
  updateSingleSemester,
} from './academicSemester.controller'
import {
  createAcademicSemestedZodSchema,
  updateAcademicSemestedZodSchema,
} from './academicSemster.validation'

const route = express.Router()

route.post(
  '/create-semister',
  validateRequest(createAcademicSemestedZodSchema),
  creareAcademicSemester
)

route.get('/:id', getSingleSemesters)
route.patch(
  '/:id',
  validateRequest(updateAcademicSemestedZodSchema),
  updateSingleSemester
)
route.get('/', getAllSemesters)

export const academicRoute = route
