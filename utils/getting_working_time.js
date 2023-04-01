 import BookingDates from "../models/bookingDates.js";
import DoctorsAppointments from "../models/doctorsAppointments.js";

 //Getting the current day
 const currentDay = new Date(Date.now())
const day = currentDay.getDate();
const month = currentDay.getMonth()
const year = currentDay.getFullYear()
let days = [];
let lastDate = ''



// function to get days in a month starting from the current day
function getDaysInMonth(month, year) {
  const date = new Date(year, month, day);
   const lastDay = date.getDate() - 1

  while (date.getDate() !== lastDay) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);

}
return days
}
getDaysInMonth(month, year, day)



// This function is called once when creating the first month during the development. Then the dates will be added every day automatically
// creating days object to store

  

//saving only business days to DB
 


// This function controls what to save to DB
const savingOnlyNewDateToDB = async function () {
  // 1. checking if we have a new 'last day' in a month
  lastDate = days[days.length - 1].toDateString()

const newDay = await BookingDates.find({date: lastDate})
const allDays = await BookingDates.find({})

if(newDay.length === 0 && allDays.length !==0) {
const newDay =  new BookingDates({
     date:  days[days.length - 1].toDateString(),
  day:  days[days.length - 1].getDay(),
  h9: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h10: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h11: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h12: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h13: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h14: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h15: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h16: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h17: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  }, 
  })
newDay.save()

}

if(allDays.length === 0) {
days.map(item => {
 const bookingDate = new BookingDates({
  date: item.toDateString(),
  day: item.getDay(),
  h9: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h10: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h11: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h12: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h13: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h14: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h15: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h16: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h17: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
 
})
bookingDate.save()
  })
}
}

const doc = new DoctorsAppointments({doctor: "Umka"})




const newDates = days.map(item => ({
  date: item.toDateString(),
  day: item.getDay(),
  h9: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h10: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h11: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h12: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h13: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h14: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h15: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h16: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
  h17: {
    available: true,
    name: '',
    phone: 0,
    procedure: ""
  },
 
 }))




 doc.allDates = [...newDates]


doc.save()




// exporting the function to call it when the user hits '/' endpoint
export default savingOnlyNewDateToDB