/*
The way this model is built, is creating a lot of repetition in your code as far as I can see
Maybe before moving forward, you can spend some time and see if this could be simplified
to avoid repeating code on the backend and as well on the frontend


Here's an alternative approach that separates the doctor's availability and booked appointments into separate models. 
This will help you manage and query availability and appointments more efficiently.

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
});

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
});

With this structure, you can manage doctors, their availabilities, and appointments independently. 
This design will make it easier to query and manage appointments and availability. 
For example, you can retrieve a doctor's availability without loading their appointment data or vice versa. 
This separation of concerns will also make your application more maintainable and scalable.

Here are example objects for the Doctor, Availability, and Appointment models

---------- Doctor --------
{
  "_id": "60a7b9f5d5a5b9001555da21",
  "name": "Dr. Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "555-1234",
  "specialization": "Veterinarian"
}

-------- Patient -----------
{
  "_id": "60a7b9f5d5a5b9001555da21",
  "name": "Vika",
  "email": "vika@example.com",
  "phone": "555-1234",
  
}

----------- Appointment ------------
[
  {
    "_id": "60a7bd5ad5a5b9001555da26",
    "doctorId": "60a7b9f5d5a5b9001555da21",
    "patientId": "607c1ea07e8466001570e7d9",
    "purpose": "cutting his dick off"
    "date": "2023-04-24",
    "startTime": "09:00",
  },{
    "_id": "60a7bd5ad5a5b9001555da27",
    "doctorId": "60a7b9f5d5a5b9001555da21",
    "patientId": "607c1ea07e8466001570e7da",
    "date": "2023-04-24",
    "startTime": "10:00",
  }
  
]

These example objects demonstrate how the data is structured with the separated schemas. 
The doctorId field in both the Availability and Appointment models is used to reference the related Doctor object. 
The patientId field in the Appointment model can be used to reference a separate Patient schema or any other schema you have for patients.

------- Common queries to help you visualize it ------------

1. Get a doctor's availability:
const doctorId = '60a7b9f5d5a5b9001555da21';
const availability = await Availability.find({ doctorId });

2. Get a doctor's availability for a specific day of the week:
const doctorId = '60a7b9f5d5a5b9001555da21';
const dayOfWeek = 'Monday';
const availability = await Availability.find({ doctorId, dayOfWeek });


3. Get a doctor's appointments:
const doctorId = '60a7b9f5d5a5b9001555da21';
const appointments = await Appointment.find({ doctorId }).populate('patientId');


4. Get a doctor's appointments for a specific date:
const doctorId = '60a7b9f5d5a5b9001555da21';
const date = new Date('2023-04-24');
const appointments = await Appointment.find({
  doctorId,
  date,
}).populate('patientId');


5. Get available time slots for a specific doctor on a specific date:
const doctorId = '60a7b9f5d5a5b9001555da21';
const date = new Date('2023-04-24');
const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });

const availability = await Availability.find({ doctorId, dayOfWeek });
const appointments = await Appointment.find({ doctorId, date });

// Function to calculate available time slots based on existing appointments
const getAvailableTimeSlots = (availability, appointments) => {
  // Your logic here
};

const availableTimeSlots = getAvailableTimeSlots(availability, appointments);


6. Get all appointments for a specific patient:
const patientId = '607c1ea07e8466001570e7d9';
const appointments = await Appointment.find({ patientId }).populate('doctorId');


7. Get appointments for a specific doctor within a date range:
const doctorId = '60a7b9f5d5a5b9001555da21';
const startDate = new Date('2023-04-01');
const endDate = new Date('2023-04-30');
const appointments = await Appointment.find({
  doctorId,
  date: { $gte: startDate, $lte: endDate },
}).populate('patientId');


8. Create a new appointment for a specific doctor on a specific day with a specific time:
  1. First, validate if the requested time slot is available for the doctor:
    const doctorId = '60a7b9f5d5a5b9001555da21';
    const patientId = '607c1ea07e8466001570e7d9';
    const appointmentDate = new Date('2023-04-24');
    const appointmentStartTime = '09:30';
    const appointmentEndTime = '10:00';
    const dayOfWeek = appointmentDate.toLocaleString('en-US', { weekday: 'long' });

    const availability = await Availability.findOne({
    doctorId,
    dayOfWeek,
    startTime: { $lte: appointmentStartTime },
    endTime: { $gte: appointmentEndTime },
    });

    if (!availability) {
    // Handle the case when the doctor is not available during the requested time slot
    }

  2. Then, check if there are no overlapping appointments for the doctor:

    const overlappingAppointment = await Appointment.findOne({
      doctorId,
      date: appointmentDate,
      $or: [
        {
          startTime: { $lt: appointmentEndTime },
          endTime: { $gt: appointmentStartTime },
        },
        {
          startTime: { $lte: appointmentStartTime },
          endTime: { $gte: appointmentEndTime },
        },
        {
          startTime: { $gte: appointmentStartTime },
          endTime: { $lte: appointmentEndTime },
        },
      ],
    });

    if (overlappingAppointment) {
      // Handle the case when there is an overlapping appointment
    }

  3. If the requested time slot is available and there are no overlapping appointments, create a new appointment:

    const newAppointment = new Appointment({
      doctorId,
      patientId,
      date: appointmentDate,
      startTime: appointmentStartTime,
      endTime: appointmentEndTime,
    });

    await newAppointment.save();
*/
