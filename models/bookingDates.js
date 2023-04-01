import mongoose, { Schema } from "mongoose";



const bookingDatesSchema = new mongoose.Schema({
  
    date: {
        type: String
    }, 

    h9: {
        type: Boolean

    },
     h10: {
        type: Boolean
    },
     h11: {
        type: Boolean
    },
     h12: {
        type: Boolean
    },
     h13: {
        type: Boolean
    },
     h14: {
        type: Boolean
    },
     h15: {
        type: Boolean
    },
     h16: {
        type: Boolean
    },
     h17: {
        type: Boolean
    },
day: {
    type: Number
}
}, { collection: 'booking' }
) 

const BookingDates = new mongoose.model("BookingDates", bookingDatesSchema);
export default BookingDates;

