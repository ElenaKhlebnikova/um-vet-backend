import tryCatchFn from '../utils/index.js'
import commentsSchema from './../models/comments-schema.js'
import { ObjectId } from 'mongodb'

const getAllComments = async function (req, res) {
    const get = async () => {
        const comments = await commentsSchema.find({
            doctorId: req.params.doctorId,
        })

        return comments
    }

    tryCatchFn(get, res)
}

const createNewComment = async function (req, res) {
    const post = async () => {
        const doc = await new commentsSchema({
            doctorId: new ObjectId(req.body.doctorId),
            name: req.body.name,
            comment: req.body.comment,
            rating: req.body.rating,
            createdAt: req.body.date,
        })
        await doc.save()

        return 'Thank you for your feedback!'
    }
    tryCatchFn(post, res)
}

export { createNewComment, getAllComments }
