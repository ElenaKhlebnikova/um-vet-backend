import savingOnlyNewDateToDB from "./utils/getting_working_time.js";
import mongoose from "mongoose";
import  makeAnAppointment from "./controllers/bookingController.js";
import express  from "express";
import cors from 'cors'
import DoctorsAppointments from "./models/doctorsAppointments.js";


// import bodyParser from "body-parser";

const port = 5000;
const app = express();
//Create HTTP server and listen on port 3000 for requests
app.use(express.json())
// app.use(bodyParser.json());

mongoose.set("strictQuery", false);
const db = mongoose.connect(process.env.DATABASE).then(() => {
  savingOnlyNewDateToDB()

console.log('connected to MDB')})

app.use(cors({
    origin: '*',
     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }))

app.get("/", async (req, res) => {
  //pagination is added by default
 const days = await DoctorsAppointments.find({})
const getWeek = function(currentDay) {

}
  try {
 
    res.status(200).json({
      status: "success",
     data: {
      days
     }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `Something went wrong... ${err}`,
    });
  }
});

app.post('/date-new', function requestHandler(req, res) {

  makeAnAppointment(req.body.id, req.body.date, req.body.hour, req.body.name, req.body.phone, req.body.procedure)

  
});




app.listen(port, () => {
  console.log(`UmVet`);
});
