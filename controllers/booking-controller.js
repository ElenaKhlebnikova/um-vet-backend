// better to name the files as doctors-appointments.js for all files in all projects you work on
import Appointments from '../models/appointment-schema.js'

const findAppointmentsByDoctor = async function (req, res) {
    console.log(req.params.doctorId)
    try {
        // finding a doctor
        const doctorsAppointments = await Appointments.find({
            doctorId: req.params.doctorId,
        })
        // sending back doctor's appointments

        res.status(200).json({
            status: 'success',
            data: {
                doctorsAppointments,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

const makeAnAppointment = async function (req, res) {
    try {
        const doc = await new Appointments({
            doctorId: req.body.doctorId,
            name: req.body.name,
            phone: req.body.phone,
            procedure: req.body.procedure,
            date: req.body.date,
            startTime: req.body.startTime,
        })

        await doc.save()

        res.status(200).json({
            status: 'success',
            data: {
                message: `Thank you for booking an appointment on ${req.body.date}(${req.body.startTime})`,
            },
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            data: {
                err,
            },
        })
    }
}

export { findAppointmentsByDoctor, makeAnAppointment }
