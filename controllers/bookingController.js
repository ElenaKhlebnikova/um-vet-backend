import DoctorsAppointments from '../models/doctorsAppointments.js'

const makeAnAppointment = async function (date, hour, name, phone, procedure) {
    // Testing on only one doctor, soon new doctors will be added
    const doc = await DoctorsAppointments.findOne({ doctor: 'Umka' })
    const dateOfAppointment = doc.allDates.find((item) => item.date === date)

    if (hour === 9) {
        dateOfAppointment.h9 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }

    if (hour === 10) {
        dateOfAppointment.h10 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }
    if (hour === 11) {
        dateOfAppointment.h11 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }
    if (hour === 12) {
        dateOfAppointment.h12 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }
    if (hour === 13) {
        dateOfAppointment.h13 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }
    if (hour === 14) {
        dateOfAppointment.h14 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }
    if (hour === 15) {
        dateOfAppointment.h15 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }
    if (hour === 16) {
        dateOfAppointment.h16 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }
    if (hour === 17) {
        dateOfAppointment.h17 = {
            available: false,
            name: name,
            phone: phone,
            procedure: procedure,
        }
    }

    doc.save()
}

export default makeAnAppointment
