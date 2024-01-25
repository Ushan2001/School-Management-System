const express = require("express")
const Exam = require("../modules/Exam");

const router = express.Router();

//save exam

router.post("/exam/save", (req, res) =>{
    let newExam = new Exam (req.body);
  
    newExam.save((err) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
        success:"Exam Record Successfully Save !"
      })
    })
  })

  //get exam

router.get("/exams", (req, res) =>{
    Exam.find().exec((err, exams) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingExam:exams
      })
    })
})

//update

router.put("/exam/update/:id", (req, res) =>{
    Exam.findByIdAndUpdate(
     req.params.id,
     {
       $set:req.body
     },
     (err, exam) =>{
       if(err){
         return res.status(400).json({error:err})
       }
 
       return res.status(200).json({
         success:"update successfully"
       })
     }
    )
 })

 //delete

router.delete("/exam/delete/:id", (req, res) =>{
  Exam.findByIdAndRemove(req.params.id).exec((err, deleteExam) =>{
      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull", err
      })
  
      return res.json({
        message:"Delete Susccessfull" , deleteExam
      })
    })
  })

  //get a specific Student

router.get("/exam/:id",(req, res) =>{
    let examId = req.params.id;
  
   Exam.findById(examId,(err, exam) =>{
      if(err){
        return res.status(400).json({success:false, err})
      }
  
      return res.status(200).json({
        success:true,
       exam
      })
    })
  })
  
  module.exports = router
  