import blogPostSchema from '../models/blog-schema.js'
import deBlogPostSchema from '../models/de-blog-schema.js'
import tryCatchFn from '../utils/index.js'

const getAllBlogPosts = async function (req, res) {
    const get = async () => {
        if (req.query.lang === 'en') {
            const posts = await blogPostSchema.find({}).select('-content')
            return posts
        }
        if (req.query.lang === 'de') {
            const posts = await deBlogPostSchema.find({}).select('-content')
            return posts
        }
    }

    tryCatchFn(get, res)
}

const getOneBlogPost = async (req, res) => {
    const get = async () => {
        if (req.query.lang === 'en') {
            const posts = await blogPostSchema.find({
                _id: req.params.postId,
            })

            return posts
        }
        if (req.query.lang === 'de') {
            const posts = await deBlogPostSchema.find({
                _id: req.params.postId,
            })

            return posts
        }
    }

    tryCatchFn(get, res)
}

export { getOneBlogPost, getAllBlogPosts }
