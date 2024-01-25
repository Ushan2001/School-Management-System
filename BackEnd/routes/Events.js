const express = require("express")
const Event = require("../modules/Event");

const router = express.Router();

//save event

router.post("/event/save", (req, res) =>{
    let newEvent = new Event (req.body);
  
    newEvent.save((err) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
        success:"Event Record Successfully Save !"
      })
    })
  })

  //get event

router.get("/events", (req, res) =>{
    Event.find().exec((err, events) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingEvent:events
      })
    })
})

//update

router.put("/event/update/:id", (req, res) =>{
    Event.findByIdAndUpdate(
     req.params.id,
     {
       $set:req.body
     },
     (err, event) =>{
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

router.delete("/event/delete/:id", (req, res) =>{
   Event.findByIdAndRemove(req.params.id).exec((err, deleteEvent) =>{
      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull", err
      })
  
      return res.json({
        message:"Delete Susccessfull" , deleteEvent
      })
    })
  })

  //get a specific Student

router.get("/event/:id",(req, res) =>{
    let eventId = req.params.id;
  
   Event.findById(eventId,(err, event) =>{
      if(err){
        return res.status(400).json({success:false, err})
      }
  
      return res.status(200).json({
        success:true,
       event
      })
    })
  })
  
  module.exports = router
  