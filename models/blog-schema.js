import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
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

const blogPostSchema = new mongoose.model('BlogPosts', blogSchema)
export default blogPostSchema
