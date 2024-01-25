const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();


const studentRouter = require("./routes/students")
const teacherRouter = require("./routes/teachers")
const userRouter = require("./routes/Users")
const feeRouter = require("./routes/fee")
const EventRouter = require("./routes/Events")
const ReportRouter = require("./routes/reports")
const ExamRouter = require("./routes/Exam")
const CourseRouter = require("./routes/courses")
const ClassRouter = require("./routes/Classes")


app.use(bodyParser.json())  
app.use(cors())

app.use(studentRouter)
app.use(teacherRouter)
app.use(userRouter)
app.use(feeRouter)
app.use(EventRouter)
app.use(ReportRouter)
app.use(ExamRouter)
app.use(CourseRouter)
app.use(ClassRouter)

const PORT = 8000;
const URL = "mongodb+srv://ushan:ushan2001@school.fmiav43.mongodb.net/School?retryWrites=true&w=majority"

mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true })
.then(() =>{
    console.log("DB Connect")
})
.catch((err) =>console.log("DB Connection Error", err))

app.listen(PORT, () =>{
    console.log("App is running on  ",PORT)    
})