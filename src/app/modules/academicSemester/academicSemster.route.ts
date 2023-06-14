import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { creareAcademicSemester } from './academicSemester.controller'
import { createAcademicSemestedZodSchema } from './academicSemster.validation'

const route = express.Router()

route.post(
  '/create-semister',
  validateRequest(createAcademicSemestedZodSchema),
  creareAcademicSemester
)

export const academicRoute = route
