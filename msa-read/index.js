const express = require('express')
const chalk = require('chalk')

const config = require('./config')
const logger = require('./core/logger')

const app = express()

app.get('/', (req, res) => res.send('Hello Read'))

app.listen(config.PORT, () => {
  logger.info(`Server running at port: ${chalk.green(config.PORT)}`)
})
