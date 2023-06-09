import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/loggar'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

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

  process.on('unhandledRejection', error => {
    console.log('unhandledRejection')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

dbConnection()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
