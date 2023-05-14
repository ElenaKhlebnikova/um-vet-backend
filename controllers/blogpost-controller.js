import blogPostSchema from '../models/blog-schema.js'

const getAllBlogPosts = async function (req, res) {
    try {
        const posts = await blogPostSchema.find({})

        res.status(200).json({
            status: 'success',
            data: {
                posts,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export default getAllBlogPosts
