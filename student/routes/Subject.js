const express = require('express');
const router = express.Router();
const Subject = require('../db-init/models/SubjectSchema');

router.post('/newsubject', async(req, res, next) => {
  try {
    const isSubjectExist = await Subject.findOne({name: req.body.name});

    if(isSubjectExist) {
      res.status(400).json({
        message: `Subject Already Exists`
      })
    } else {
      const newSubject = await Subject.create({
        name: req.body.name,
        marks:req.body.marks
      })
      res.status(200).json({
        data: newSubject,
        message: `Subject Created Successfully`
      })
    }
  } catch (err) {
    next(err)
  }
});

router.get('/get-all-subjects', async (req, res, next) => {
  try {
    let allSubjects = await Subject.find({});

    res.status(200).json({
      data: allSubjects,
      message: `All Subjects Fetched Successfully`
    })
  } catch(err) {
    next(err);
  }
})

router.put('/update-subject', async (req, res, next) => {
  try {
    const isSubjectExist = await Subject.findOne({name: req.body.name});
    if(isSubjectExist) {
      await Subject.updateOne(
        {name: req.body.name},
        {
          $set: {
            name: req.body.new_name,
            marks:req.body.marks
          }
        }
      )
      .then(() => {
        res.status(200).json({
          message: 'Subject Updated Successfully'
        })
      })
      .catch((err) => {
        res.status(400).json({
          message: 'Error While Updating',
          err: err,
        })
      })
      
    } else {
      res.status(404).json({
        message: `Subject Not Found`
      })
    }
  } catch(err) {
    next(err);
  }
})

router.delete('/delete-subject',async (req,res,next)=>{
  try{
    const isSubjectExist = await Subject.findOne({name: req.body.name});
    if(isSubjectExist){
      await Subject.deleteOne(
        {name:req.body.name}
      )
      .then(()=>{
        res.status(200).json({
          message:'Subject Deleted Successfully'
        })
      })
      .catch((err)=>{
        res.status(400).json({
          message:'Error while deleting',
          err:err
        })
      })
    }else{
      res.status(404).json({
        message:'Subject not found'
      })
    }
  } catch(err){
    next(err);
  }
})

router.delete('/delete-all', async (req, res, next) => {
  try {
    let allSubjects = await Subject.deleteMany({});
    res.status(200).json({
      message: `All Subjects Deleted Successfully`
    })
  } catch(err) {
    next(err);
  }
})

module.exports = router;