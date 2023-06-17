import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import router from '../../routes'
import {
  creareAcademicSemester,
  deleteSingleSemester,
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

router.delete('/id', deleteSingleSemester)
route.get('/', getAllSemesters)

export const academicRoute = route
