const express = require("express")
const Course = require("../modules/course");

const router = express.Router();

//save course

router.post("/course/save", (req, res) =>{
    let newCourse = new Course (req.body);
  
    newCourse.save((err) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
        success:"Course Record Successfully Save !"
      })
    })
  })

  //get course

router.get("/courses", (req, res) =>{
    Course.find().exec((err, courses) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingCourse:courses
      })
    })
})

//update

router.put("/course/update/:id", (req, res) =>{
    Course.findByIdAndUpdate(
     req.params.id,
     {
       $set:req.body
     },
     (err, course) =>{
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

router.delete("/course/delete/:id", (req, res) =>{
   Course.findByIdAndRemove(req.params.id).exec((err, deleteCourse) =>{
      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull", err
      })
  
      return res.json({
        message:"Delete Susccessfull" , deleteCourse
      })
    })
  })

  //get a specific Student

router.get("/course/:id",(req, res) =>{
    let courseId = req.params.id;
  
  Course.findById(courseId,(err, course) =>{
      if(err){
        return res.status(400).json({success:false, err})
      }
  
      return res.status(200).json({
        success:true,
         course
      })
    })
  })
  
  module.exports = router
  