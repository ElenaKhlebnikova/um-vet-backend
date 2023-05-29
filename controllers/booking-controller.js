import Appointments from '../models/appointment-schema.js'
import tryCatchFn from '../utils/index.js'

const findAppointmentsByDoctor = async function (req, res) {
    const get = async () => {
        const doctorsAppointments = await Appointments.find({
            doctorId: req.params.doctorId,
        })
        return doctorsAppointments
    }

    tryCatchFn(get, res)
}

const makeAnAppointment = async function (req, res) {
    const post = async () => {
        const doc = await new Appointments({
            doctorId: req.body.doctorId,
            name: req.body.name,
            phone: req.body.phone,
            procedure: req.body.procedure,
            date: req.body.date,
            startTime: req.body.startTime,
        })

        await doc.save()

        return `Thank you for booking an appointment on ${req.body.date}(${req.body.startTime})`
    }
    tryCatchFn(post, res)
}

export { findAppointmentsByDoctor, makeAnAppointment }
