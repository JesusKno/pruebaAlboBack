import express from 'express'
import db from './config/db.js'
import taskRouter from './routes/tasksRouter.js'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.listen(3000)

app.use('/', taskRouter)


console.log("server on port", 3000)