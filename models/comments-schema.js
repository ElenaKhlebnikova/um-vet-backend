import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
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

    comment: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, 'Comment should be at least 10 characters long'],
        maxlength: [1000, 'Comment should be less than 1000 characters'],
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },

    createdAt: {
        type: String,
    },
})

const commentsSchema = new mongoose.model('Comments', commentSchema)
export default commentsSchema
