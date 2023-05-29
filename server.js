import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import {
    findAppointmentsByDoctor,
    makeAnAppointment,
} from './controllers/booking-controller.js'
import { getDoctors, getOneDoctor } from './controllers/doctor-controller.js'
import {
    getAllBlogPosts,
    getOneBlogPost,
} from './controllers/blogpost-controller.js'
import {
    createNewComment,
    getAllComments,
} from './controllers/comments-controller.js'
import getServiceAndPrice from './controllers/service-and-price-controller.js'

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
//Blog
app.get('/blog', getAllBlogPosts)
app.get('/blog/:postId', getOneBlogPost)
// Booking (appointments)
app.get('/appointments/:doctorId', findAppointmentsByDoctor)
app.post('/appointments', makeAnAppointment)
//Comments
app.post('/comments', createNewComment)
app.get('/comments/:doctorId', getAllComments)
//Doctors
app.get('/doctors', getDoctors)
app.get('/doctors/:doctorId', getOneDoctor)
//Service and prices
app.get('/service-and-prices', getServiceAndPrice)
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
