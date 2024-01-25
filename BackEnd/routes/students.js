const express = require("express")
const Student = require("../modules/student");

const router = express.Router();

//save student

router.post("/student/save", (req, res) =>{
    let newStudent = new Student(req.body);
  
    newStudent.save((err) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
        success:"Student Record Successfully Save !"
      })
    })
  })

  //get Student

router.get("/students", (req, res) =>{
    Student.find().exec((err, students) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingStudent:students
      })
    })
})

//update

router.put("/student/update/:id", (req, res) =>{
    Student.findByIdAndUpdate(
     req.params.id,
     {
       $set:req.body
     },
     (err, student) =>{
       if(err){
         return res.status(400).json({error:err})
       }
 
       return res.status(200).json({
         success:"update succedfully"
       })
     }
    )
 })

 //delete

router.delete("/student/delete/:id", (req, res) =>{
    Student.findByIdAndRemove(req.params.id).exec((err, deleteStudent) =>{
      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull", err
      })
  
      return res.json({
        message:"Delete Susccessfull" , deleteStudent
      })
    })
  })

  //get a specific Student

router.get("/student/:id",(req, res) =>{
    let studentId = req.params.id;
  
    Student.findById(studentId,(err, student) =>{
      if(err){
        return res.status(400).json({success:false, err})
      }
  
      return res.status(200).json({
        success:true,
        student
      })
    })
  })
  
  module.exports = router
  