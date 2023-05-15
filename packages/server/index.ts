import express from 'express'
import * as path from 'path'
import { CLIENT_DIR } from './const'
import { sequelize } from './db'
import { router } from './routes/api'

sequelize
  .authenticate()
  .then(() => console.log('Connected.'))
  .catch(err => console.error('Connection error: ', err))

const app = express()
const { PORT = 3001 } = process.env

app.use(express.static(path.join(__dirname, CLIENT_DIR)))
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, CLIENT_DIR + 'index.html'))
)
app.use(router)
app.listen(PORT)
console.log('server started')
