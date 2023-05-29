import mongoose from 'mongoose'

const deDoctorSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctors',
        required: true,
    },
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

const deDoctorsSchema = new mongoose.model('de-doctors', deDoctorSchema)
export default deDoctorsSchema
