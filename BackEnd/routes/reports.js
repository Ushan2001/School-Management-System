const express = require("express")
const Report = require("../modules/report");

const router = express.Router();

//save report

router.post("/report/save", (req, res) =>{
    let newReport = new Report (req.body);
  
    newReport.save((err) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
        success:"Report Record Successfully Save !"
      })
    })
  })

  //get report

router.get("/reports", (req, res) =>{
    Report.find().exec((err, reports) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingReport:reports
      })
    })
})

//update

router.put("/report/update/:id", (req, res) =>{
    Report.findByIdAndUpdate(
     req.params.id,
     {
       $set:req.body
     },
     (err, report) =>{
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

router.delete("/report/delete/:id", (req, res) =>{
   Report.findByIdAndRemove(req.params.id).exec((err, deleteReport) =>{
      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull", err
      })
  
      return res.json({
        message:"Delete Susccessfull" , deleteReport
      })
    })
  })

  //get a specific Student

router.get("/report/:id",(req, res) =>{
    let reportId = req.params.id;
  
   Report.findById(reportId,(err, report) =>{
      if(err){
        return res.status(400).json({success:false, err})
      }
  
      return res.status(200).json({
        success:true,
        report
      })
    })
  })
  
  module.exports = router
  