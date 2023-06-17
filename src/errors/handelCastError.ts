import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../inferfaces/error'

const handelCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'invalid ID',
    },
  ]
  const statusCode = 400
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  }
}

export default handelCastError
