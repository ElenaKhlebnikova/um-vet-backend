import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
})

const doctorsSchema = new mongoose.model('Doctors', doctorSchema)
export default doctorsSchema
