import mongoose from 'mongoose'

const bookingDatesSchema = new mongoose.Schema(
    {
        date: {},

        h9: {},
        h10: {},
        h11: {},
        h12: {},
        h13: {},
        h14: {},
        h15: {},
        h16: {},
        h17: {},
        day: {},
    },
    { collection: 'booking' }
)
const BookingDates = new mongoose.model('BookingDates', bookingDatesSchema)
export default BookingDates
