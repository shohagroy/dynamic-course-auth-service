import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import {
  creareAcademicSemester,
  getAllSemesters,
} from './academicSemester.controller'
import { createAcademicSemestedZodSchema } from './academicSemster.validation'

const route = express.Router()

route.post(
  '/create-semister',
  validateRequest(createAcademicSemestedZodSchema),
  creareAcademicSemester
)

route.get('/get-semesters', getAllSemesters)

export const academicRoute = route
