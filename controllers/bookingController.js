

import DoctorsAppointments from "../models/doctorsAppointments.js";

 const makeAnAppointment = async function( date, hour, name, phone, procedure, doctor) {
    const doc = await DoctorsAppointments.findOne({doctor: "Umka"})
    const dateOfAppointment = doc.allDates.find(item => item.date === date)

    
 dateOfAppointment[hour] = {
   available: false,
        name: name,
        phone: phone,
        procedure: procedure,
  }

  doc.save()
            
         
 
   }
 


// export default makeAnAppointment

export default makeAnAppointment
