import express from 'express'
import * as path from 'path'
import { CLIENT_DIR } from './const'
import { sequelize } from './db'
import { router } from './routes/api'
import bodyParser from 'body-parser'
const cors = require('cors')

sequelize
  .authenticate()
  .then(() => console.log('Connected.'))
  .catch(err => console.error('Connection error: ', err))

const app = express()

app.use(cors())

const { PORT = 3001 } = process.env

app.use(express.static(path.join(__dirname, CLIENT_DIR)))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, CLIENT_DIR + 'index.html'))
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)
app.listen(PORT)
console.log(`server listen port ${PORT}`)
