import express, { Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/users.routes'
import globalErrorHandelar from './app/middlewares/globalErrorHandelar'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRoute)
app.use(globalErrorHandelar)

app.get('/', async (req: Request, res: Response) => {
  res.send('dynamic course auth server is running...')
})

export default app
