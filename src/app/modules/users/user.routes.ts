import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createUser } from './user.controllers'
import { createUserZodSchema } from './user.validation'

const route = express.Router()

route.post('/create-user', validateRequest(createUserZodSchema), createUser)

export default route
