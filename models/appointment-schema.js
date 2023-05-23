import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctors',
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Name should be at least 3 characters long'],
        maxlength: [100, 'Name should be less than 100 characters'],
    },
    phone: {
        type: Number,
        required: true,
        min: [10000000000, 'Phone number should be 11 characters long'],
        max: [99999999999, 'Phone number should be 11 characters long'],
    },
    procedure: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
})

const appointments = new mongoose.model('Appointments', appointmentSchema)
export default appointments
