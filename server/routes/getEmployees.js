import express from 'express'
import { Employees } from '../models/Employees.js'


const router = express.Router();


router.get("/readall", async(req, res) => {
    try {
        const response = await Employees.find()
        //console.log(response);
        res.json(response)
    } catch (error) {
        res.status(500).send(`Error adding employee: ${error.message}`);
    }
})


export { router as getEmployees };