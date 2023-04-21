import savingOnlyNewDateToDB from './utils/getting_working_time.js'
import mongoose from 'mongoose'
import makeAnAppointment from './controllers/bookingController.js'
import express from 'express'
import cors from 'cors'
import DoctorsAppointments from './models/doctorsAppointments.js'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE).then(() => {
    savingOnlyNewDateToDB()
})

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    })
)

app.get('/', async (req, res) => {
    const days = await DoctorsAppointments.find({})
    try {
        res.status(200).json({
            status: 'success',
            data: {
                days,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: `Something went wrong... ${err}`,
        })
    }
})

app.post('/date-new', function requestHandler(req) {
    makeAnAppointment(
        req.body.id,
        req.body.date,
        req.body.hour,
        req.body.name,
        req.body.phone,
        req.body.procedure
    )
})

app.listen(process.env.PORT, () => {})
