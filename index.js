import express from 'express'
import db from './config/db.js'
import taskRouter from './routes/tasksRouter.js'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())


app.listen(3001)

app.use('/', taskRouter)


console.log("server on port", 3001)