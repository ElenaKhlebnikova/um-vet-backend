import blogPostSchema from '../models/blog-schema.js'

const getAllBlogPosts = async function (req, res) {
    try {
        const posts = await blogPostSchema.find({}).select('-content')

        res.status(200).json({
            status: 'success',
            data: {
                posts,
            },
        })
    } catch (err) {
        res.status(err.code).json({
            status: 'fail',
            message: err,
        })
    }
}

const getOneBlogPost = async (req, res) => {
    try {
        const posts = await blogPostSchema.find({
            _id: req.params.postId,
        })
        res.status(200).json({
            status: 'success',
            data: {
                posts,
            },
        })
    } catch (err) {
        res.status(err.code).json({
            status: 'fail',
            message: err,
        })
    }
}
export { getOneBlogPost, getAllBlogPosts }
