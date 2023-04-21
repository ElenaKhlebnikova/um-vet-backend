import mongoose from 'mongoose'

const doctorsAppointmentsSchema = new mongoose.Schema(
    {
        doctor: {
            type: String,
        },

        allDates: [
            {
                date: { type: String },
                day: { type: Number },

                h9: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h10: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h11: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h12: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h13: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h14: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h15: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h16: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h17: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
            },
        ],
    },
    { collection: 'doctors' }
)

const DoctorsAppointments = new mongoose.model(
    'DoctorsAppointments',
    doctorsAppointmentsSchema
)
export default DoctorsAppointments
