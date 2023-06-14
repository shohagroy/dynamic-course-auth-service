import express, { Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandelar from './app/middlewares/globalErrorHandelar'
import routes from './app/routes'

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

export default app
