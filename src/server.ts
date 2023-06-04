import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/loggar'

async function dbConnection() {
  try {
    if (config.DB_URI) {
      await mongoose.connect(config.DB_URI as string)
      app.listen(config.port, () => {
        logger.info(`server is listening on port: ${config.port as string}`)
      })
    } else {
      errorLogger.error('db uri is not defined')
    }
  } catch (err) {
    errorLogger.error(`Failed to connect database ${err}`)
  }
}

dbConnection()
