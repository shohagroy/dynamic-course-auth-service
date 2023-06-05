import { RequestHandler } from 'express'
import { createUserToDb } from './user.services'

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await createUserToDb(user)

    res.status(201).json({
      status: 'success',
      message: 'user create successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
