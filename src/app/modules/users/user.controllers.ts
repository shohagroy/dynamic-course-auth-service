import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import { createUserToDb } from './user.services'

export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await createUserToDb(user)

    sendResponse<IUser>(res, {
      statusCode: 201,
      success: true,
      message: 'User Created Successfully',
      data: result,
    })

    next()
  }
)
