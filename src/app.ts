import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandelar from './app/middlewares/globalErrorHandelar'
import routes from './app/routes'
import httpStatus from 'http-status-codes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', routes)
app.use(globalErrorHandelar)

app.get('/', async (req: Request, res: Response) => {
  res.send('dynamic course auth server is running...')
  // Promise.reject(new Error('dynamic course auth server is running'))
})

// not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    sussecc: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
