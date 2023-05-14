import mongoose from "mongoose";
const serviceAndPrice = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  
  },

});



const serviceAndPriceSchema = new mongoose.model(
    'ServiceAndPrice',
    serviceAndPrice
)
export default serviceAndPriceSchema
