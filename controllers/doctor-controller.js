import { ObjectId } from 'mongodb'
import commentsSchema from '../models/comments-schema.js'
import doctorsSchema from '../models/doctor-schema.js'

const getAllComments = async function (req, res) {
    try {
        // finding a comment section by passing  doctor's id
        const comments = await commentsSchema.find({
            doctorId: req.query.doctorId,
        })

        // sending back comments on the doctor

        res.status(200).json({
            status: 'success',
            data: {
                comments,
            },
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

const getDoctors = async function (req, res) {
    try {
        const doctors = await doctorsSchema.find({})
        res.status(200).json({
            status: 'success',
            data: {
                doctors,
            },
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

const createNewComment = async function (req, res) {
    console.log(req)
    try {
        const doc = await new commentsSchema({
            doctorId: new ObjectId(req.body.doctorId),
            name: req.body.name,
            comment: req.body.comment,
            rating: req.body.rating,
            createdAt: req.body.date,
        })
        await doc.save()
        res.status(200).json({
            status: 'success',
            data: {
                message: 'Thank you for your feedback!',
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: {
                err,
            },
        })
    }
}

export { createNewComment, getAllComments, getDoctors }
