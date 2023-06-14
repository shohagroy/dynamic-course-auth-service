import express from 'express'
import { academicRoute } from '../modules/academicSemester/academicSemster.route'
import { userRoute } from '../modules/users/user.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/academic',
    route: academicRoute,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
