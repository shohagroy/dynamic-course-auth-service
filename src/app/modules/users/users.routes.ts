import express from 'express'
import { createUser } from './users.controllers'

const route = express.Router()

route.post('/create-user', createUser)

export default route
