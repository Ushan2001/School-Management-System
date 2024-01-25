const express = require("express")
const Fee = require("../modules/fee");

const router = express.Router();

//save fee

router.post("/fee/save", (req, res) =>{
    let newFee = new Fee (req.body);
  
    newFee.save((err) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
        success:"Payment Record Successfully Save !"
      })
    })
  })

  //get fee

router.get("/fee", (req, res) =>{
    Fee.find().exec((err, fees) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingFee:fees
      })
    })
})

//update

router.put("/fee/update/:id", (req, res) =>{
    Fee.findByIdAndUpdate(
     req.params.id,
     {
       $set:req.body
     },
     (err, fee) =>{
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

router.delete("/fee/delete/:id", (req, res) =>{
   Fee.findByIdAndRemove(req.params.id).exec((err, deleteFee) =>{
      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull", err
      })
  
      return res.json({
        message:"Delete Susccessfull" , deleteFee
      })
    })
  })

  //get a specific Student

router.get("/fee/:id",(req, res) =>{
    let feeId = req.params.id;
  
    Fee.findById(feeId,(err, fee) =>{
      if(err){
        return res.status(400).json({success:false, err})
      }
  
      return res.status(200).json({
        success:true,
        fee
      })
    })
  })
  
  module.exports = router
  