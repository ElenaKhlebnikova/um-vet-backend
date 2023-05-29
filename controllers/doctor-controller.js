import doctorsSchema from '../models/doctor-schema.js'
import deDoctorsSchema from '../models/de-doctor-schema.js'
import tryCatchFn from '../utils/index.js'

const getOneDoctor = async (req, res) => {
    const get = async () => {
        if (req.query.lang === 'en') {
            const doctors = await doctorsSchema.find({
                _id: req.params.doctorId,
            })
            return doctors
        }
        if (req.query.lang === 'de') {
            const doctors = await deDoctorsSchema.find({
                _id: req.params.doctorId,
            })
            return doctors
        }
    }

    tryCatchFn(get, res)
}
const getDoctors = async function (req, res) {
    const get = async () => {
        if (req.query.lang === 'en') {
            const doctors = await doctorsSchema
                .find({})
                .select('-education')
                .select('-about')
            return doctors
        }
        if (req.query.lang === 'de') {
            const doctors = await deDoctorsSchema
                .find({})
                .select('-education')
                .select('-about')
            return doctors
        }
    }
    tryCatchFn(get, res)
}

export { getDoctors, getOneDoctor }
