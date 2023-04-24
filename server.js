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

// This could probably work with just `app.use(cors())`
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    })
)


// maybe instead of `/`, you can name this handler like /appointments
=======
// Getting all free dates

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

// This one could also be /appointments but with a method POST
//  This is usually how we name these routes

// /appointments GET --> get all of them
// /appointments POST --> create a new one
// /appointments/:id GET --> get one by ID
// /appointments/:id PUT --> update one by ID
=======
// Sending data to make an appointment


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

// better to add a console.log saying "Listening on port ----"
app.listen(process.env.PORT, () => {})
