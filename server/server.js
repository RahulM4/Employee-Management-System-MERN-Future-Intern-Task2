import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import { getEmployees } from './routes/getEmployees.js'
import { createEmployee } from './routes/createEmployee.js'
import { deleteEmployee } from './routes/deleteEmployee.js'
import { getEmployeeById } from './routes/getEmployeeById.js'
import { updateEmployee } from './routes/updateEmployee.js'


const app = express()
app.use(cors())
app.use(express.json())

//db connection
connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB Connection Failed`, err);
})


// middlewares
app.use('/employee', getEmployees);
app.use('/employee', getEmployeeById);
app.use('/employee', deleteEmployee);
app.use('/employee', updateEmployee);
app.use('/employee', createEmployee);



app.listen