import mongoose from 'mongoose'

const deBlogSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPosts',
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: false,
    },
    createdAt: {
        type: String,
    },
})

const deBlogPostSchema = new mongoose.model('de-blogposts', deBlogSchema)
export default deBlogPostSchema
