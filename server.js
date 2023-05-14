import mongoose from 'mongoose'
import {
    findAppointments,
    makeAnAppointment,
} from './controllers/booking-controller.js'

import {
    getAllComments,
    getDoctors,
    createNewComment,
} from './controllers/doctor-controller.js'
import getAllBlogPosts from './controllers/blogpost-controller.js'
import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import serviceAndPriceSchema from './models/service-and-prices-schema.js'
import bodyParser from 'body-parser'

dotenv.config()
const app = express()
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    })
)
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE).then(() => {})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
// maybe instead of `/`, you can name this handler like /appointments

// Getting all free dates

app.post('/comments', createNewComment)
app.get('/comments', getAllComments)
app.get('/appointments', findAppointments)
app.get('/blog', getAllBlogPosts)
app.post('/appointments', makeAnAppointment)
app.get('/doctors', getDoctors)

app.get('/service-and-prices', async (req, res) => {
    const service = await serviceAndPriceSchema.find({})
    try {
        res.status(200).json({
            status: 'success',
            data: {
                service,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: `Something went wrong... ${err}`,
        })
    }
})

// better to add a console.log saying "Listening on port ----"
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
