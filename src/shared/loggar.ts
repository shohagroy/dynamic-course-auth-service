import { createLogger, format, transports } from 'winston'
import path from 'path'
import config from '../config'

const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minute = date.getMinutes()
  const secend = date.getSeconds()
  return `${date.toDateString()} ${hour}: ${minute}: ${secend} [${label}] ${level}: ${message}`
})

export const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'dynamic!' }), timestamp(), myFormat),
  transports: [
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})

if (config.node_env !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  )
}

export const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'dynamic!' }), timestamp(), myFormat),
  transports: [
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  errorLogger.add(
    new transports.Console({
      format: format.simple(),
    })
  )
}
