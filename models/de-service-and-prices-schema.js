import mongoose from 'mongoose'
const deServiceAndPrice = new mongoose.Schema({
    service: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
})

const deServiceAndPriceSchema = new mongoose.model(
    'de-serviceandprices',
    deServiceAndPrice
)
export default deServiceAndPriceSchema
