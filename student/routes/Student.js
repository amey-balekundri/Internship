const express = require('express');
const router = express.Router();
const Student = require('../db-init/models/StudentSchema');
const Subject =require("../db-init/models/SubjectSchema")
const jwt =require('../middlewares/jwt');
const auth=require('../middlewares/auth');

const bcrypt = require('bcrypt');

router.post('/newstudent', async(req, res, next) => {
  try {
    const isStudentExist = await Student.findOne({email: req.body.email});

    if(isStudentExist) {
      res.status(400).json({
        message: `Student Already Exists`
      })
    } else {
      const salt=await bcrypt.genSalt(10)
      const hash_pass=await bcrypt.hash(req.body.password,salt)
      const newStudent = await Student.create({
        name: req.body.name,
        email: req.body.email,
        contact:req.body.contact,
        password:hash_pass,
        subjects:req.body.subjects,

      })
      res.status(200).json({
        data: newStudent,
        message: `Student Created Successfully`
      })
    }
  } catch (err) {
    next(err)
  }
});

router.post('/get-subjects',async (req,res,next)=>{
  try{
    let student=await Student.findOne({email:req.body.email})
    if(student){
      const subject= await Subject.findById({_id:student.subjects[0]},{marks:0,_id:0,__v:0})
      res.status(200).json({
        subject:subject
      })
    } else{
      res.status(404).json({
        message:"Student Not Found"
      })
    }
  } catch(err){
    next(err);
  }
})

router.get('/get-all-students', async (req, res, next) => {
  try {
    let allStudents = await Student.find({});
    res.status(200).json({
      data: allStudents,
      message: `All Students Fetched Successfully`
    })
  } catch(err) {
    next(err);
  }
})

router.put('/update-student',auth, async (req, res, next) => {
  try {
    const isStudentExist = await Student.findOne({email: req.body.email});
    if(isStudentExist) {
      await Student.updateOne(
        {email: req.body.email},
        {
          $set: {
            name: req.body.name
          }
        }
      )
      .then(() => {
        res.status(200).json({
          message: 'Student Updated Successfully'
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
        message: `Student Not Found`
      })
    }
  } catch(err) {
    next(err);
  }
})

router.delete('/delete-student',async (req,res,next)=>{
  try{
    const isStudentExist = await Student.findOne({email: req.body.email});
    if(isStudentExist){
      await Student.deleteOne(
        {email:req.body.email}
      )
      .then(()=>{
        res.status(200).json({
          message:'Student Deleted Successfully'
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
        message:'Student not found'
      })
    }
  } catch(err){
    next(err);
  }
})

router.delete('/delete-all', async (req, res, next) => {
  try {
    let allStudents = await Student.deleteMany({});
    res.status(200).json({
      message: `All Students Deleted Successfully`
    })
  } catch(err) {
    next(err);
  }
})

router.post('/login',async(req,res,next) => {
  try{
    let student=await Student.findOne({email:req.body.email});
    if(student){
      if(await bcrypt.compare(req.body.password,student.password)){
        res.status(200).json({
          message:'Login Successfull',
          jwt:jwt.generateToken(student.email)
        })
      }
      else{
        res.status(403).json({
          message:'Login Unsuccessfull',
        })
      }
    }else{
      res.status(404).json({
        message:'Email Not Found'
      })
    }
  }catch(err){
    next(err);
  }
})


module.exports = router;