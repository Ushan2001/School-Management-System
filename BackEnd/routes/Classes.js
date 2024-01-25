const express = require("express")
const ClassM = require("../modules/Class");

const router = express.Router();

//save class

router.post("/class/save", (req, res) =>{
    let newClassM = new ClassM (req.body);
  
    newClassM.save((err) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
        success:"Class Record Successfully Save !"
      })
    })
  })

  //get class

router.get("/classes", (req, res) =>{
    ClassM.find().exec((err, classesM) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingClass:classesM
      })
    })
})

//update

router.put("/class/update/:id", (req, res) =>{
    ClassM.findByIdAndUpdate(
     req.params.id,
     {
       $set:req.body
     },
     (err, classM) =>{
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

router.delete("/class/delete/:id", (req, res) =>{
   ClassM.findByIdAndRemove(req.params.id).exec((err, deleteClassM) =>{
      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull", err
      })
  
      return res.json({
        message:"Delete Susccessfull" , deleteClassM
      })
    })
  })

  //get a specific Student

router.get("/class/:id",(req, res) =>{
    let classMId = req.params.id;
  
  ClassM.findById(classMId,(err, classM) =>{
      if(err){
        return res.status(400).json({success:false, err})
      }
  
      return res.status(200).json({
        success:true,
         classM
      })
    })
  })
  
  module.exports = router
  