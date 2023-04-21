import mongoose from 'mongoose'

/*
The way this model is built, is creating a lot of repetition in your code as far as I can see
Maybe before moving forward, you can spend some time and see if this could be simplified
to avoid repeating code on the backend and as well on the frontend


Here's a schema model that could potentially work

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
  weeklyAvailability: [
    {
      dayOfWeek: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true,
      },
      availableHours: [
        {
          startTime: {
            type: String,
            required: true,
          },
          endTime: {
            type: String,
            required: true,
          },
        },
      ],
      bookedSlots: [
        {
          date: {
            type: Date,
            required: true,
          },
          startTime: {
            type: String,
            required: true,
          },
          endTime: {
            type: String,
            required: true,
          },
          patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient',
          },
        },
      ],
    },
  ],
});

---------------------
And here's how the doctor object could look like

{
  "name": "Dr. Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "555-1234",
  "specialization": "Veterinarian",
  "weeklyAvailability": [
    {
      "dayOfWeek": "Monday",
      "availableHours": [
        {
          "startTime": "09:00",
          "endTime": "12:00"
        },
        {
          "startTime": "14:00",
          "endTime": "18:00"
        }
      ],
      "bookedSlots": [
        {
          "date": "2023-04-24",
          "startTime": "09:30",
          "endTime": "10:00",
          "patientId": "607c1ea07e8466001570e7d9"
        }
      ]
    },
    {
      "dayOfWeek": "Tuesday",
      "availableHours": [
        {
          "startTime": "09:00",
          "endTime": "12:00"
        },
        {
          "startTime": "14:00",
          "endTime": "18:00"
        }
      ],
      "bookedSlots": []
    }
  ]
}


*/
const doctorsAppointmentsSchema = new mongoose.Schema(
    {
        doctor: {
            type: String,
        },

        allDates: [
            {
                date: { type: String },
                day: { type: Number },

                h9: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h10: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h11: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h12: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h13: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h14: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h15: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h16: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
                h17: {
                    available: Boolean,
                    name: String,
                    phone: String,
                    procedure: String,
                },
            },
        ],
    },
    { collection: 'doctors' }
)

const DoctorsAppointments = new mongoose.model(
    'DoctorsAppointments',
    doctorsAppointmentsSchema
)
export default DoctorsAppointments
