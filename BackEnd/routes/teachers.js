const express = require("express")
const Teacher = require("../modules/teacher");

const router = express.Router();

//save teacher

router.post("/teacher/save", (req, res) =>{
    let newTeacher = new Teacher (req.body);
  
    newTeacher.save((err) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
        success:"Teachers Record Successfully Save !"
      })
    })
  })

  //get Student

router.get("/teachers", (req, res) =>{
    Teacher.find().exec((err, teachers) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingTeacher:teachers
      })
    })
})

//update

router.put("/teacher/update/:id", (req, res) =>{
    Teacher.findByIdAndUpdate(
     req.params.id,
     {
       $set:req.body
     },
     (err, teacher) =>{
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

router.delete("/teacher/delete/:id", (req, res) =>{
    Teacher.findByIdAndRemove(req.params.id).exec((err, deleteTeacher) =>{
      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull", err
      })
  
      return res.json({
        message:"Delete Susccessfull" , deleteTeacher
      })
    })
  })

  //get a specific Student

router.get("/teacher/:id",(req, res) =>{
    let teacherId = req.params.id;
  
    Teacher.findById(teacherId,(err, teacher) =>{
      if(err){
        return res.status(400).json({success:false, err})
      }
  
      return res.status(200).json({
        success:true,
        teacher
      })
    })
  })
  
  module.exports = router
  