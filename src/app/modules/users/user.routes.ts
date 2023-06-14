import express from 'express'
// import ApiError from '../../../errors/ApiError'
import validateRequest from '../../middlewares/validateRequest'
import { createUser } from './user.controllers'
import { createUserZodSchema } from './user.validation'

const route = express.Router()

route.post('/create-user', validateRequest(createUserZodSchema), createUser)

// route.get('/error', (req, res, next) => {
//   throw new ApiError(500, 'this is error message')
// })

export default route
