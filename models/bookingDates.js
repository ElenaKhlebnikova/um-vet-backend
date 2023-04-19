import mongoose, { Schema } from "mongoose";



// const bookingDatesSchema = new mongoose.Schema({
  
//     date: {
//         type: String
//     }, 

//     h9: {
//         type: Boolean

//     },
//      h10: {
//         type: Boolean
//     },
//      h11: {
//         type: Boolean
//     },
//      h12: {
//         type: Boolean
//     },
//      h13: {
//         type: Boolean
//     },
//      h14: {
//         type: Boolean
//     },
//      h15: {
//         type: Boolean
//     },
//      h16: {
//         type: Boolean
//     },
//      h17: {
//         type: Boolean
//     },
// day: {
//    
// }
// }, { collection: 'booking' }
// ) 


const bookingDatesSchema = new mongoose.Schema({
  
    date: {
      
    }, 

    h9: {
       

    },
     h10: {
       
    },
     h11: {
       
    },
     h12: {
       
    },
     h13: {
       
    },
     h14: {
       
    },
     h15: {
       
    },
     h16: {
      
    },
     h17: {
       
    },
day: {
   
}
}, { collection: 'booking' }
) 
const BookingDates = new mongoose.model("BookingDates", bookingDatesSchema);
export default BookingDates;

