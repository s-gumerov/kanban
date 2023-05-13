import express, { Request, Response } from 'express'
import * as path from 'path'
import { CLIENT_DIR } from './const'

const app = express()
const { PORT = 3000 } = process.env

app.use(express.static(path.join(__dirname, CLIENT_DIR)))
app.listen(PORT)
console.log('server started')
