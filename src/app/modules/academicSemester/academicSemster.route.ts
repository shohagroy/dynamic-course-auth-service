import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createAcademicSemestedZodSchema } from './academicSemster.validation'

const route = express.Router()

route.post('/create-user', validateRequest(createAcademicSemestedZodSchema))

export default route
