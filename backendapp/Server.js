const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")        // allows resourse sharing between two 



const dburl = "mongodb://localhost:27017/sdpproject"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});



// const dburl = "mongodb+srv://klu:klu@cluster0.mpguc.mongodb.net/demoproject32?retryWrites=true&w=majority"
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to DB Successfully")
// }).catch((err) => {
//     console.log(err.message)
// });


const app = express()
app.use(express.json())
app.use(cors())

const adminrouter = require("./routes/adminroutes")
const jobseekerrouter = require("./routes/jobseekerroutes")
const recruiterrouter = require("./routes/recruiterroutes")

app.use("",adminrouter)     // it includes admin routes
app.use("",jobseekerrouter)     // it includes jobseeker routes
app.use("",recruiterrouter)     // it includes recruiter routes



const port= 2032
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})