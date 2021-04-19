const express = require('express');
const router = express.Router();
const Contact = require('../db-init/models/ContactSchema');

router.post('/new-contact', async(req, res, next) => {
  try {
    const isContactExist = await Contact.findOne({name: req.body.name});

    if(isContactExist) {
      res.status(400).json({
        message: `Contact Already Exists`
      })
    } else {
      const newContact = await Contact.create({
        name: req.body.name,
        email: req.body.email,
        phoneno:req.body.phoneno,
        address:req.body.address
      })
      res.status(200).json({
        data: newContact,
        message: `Contact Created Successfully`
      })
    }
  } catch (err) {
    next(err)
  }
});

router.get('/get-all-contacts', async (req, res, next) => {
  try {
    let allContacts = await Contact.find({});
    res.status(200).json({
      data: allContacts,
      message: `All Contacts Fetched Successfully`
    })
  } catch(err) {
    next(err);
  }
})

router.post('/get-contact-byid', async (req, res, next) => {
  try {
    let data = await Contact.findById({_id:req.body.id});
    res.status(200).json({
      data: data,
      message: `Contact Fetched Successfully`
    })
  } catch(err) {
    next(err);
  }
})

router.put('/update-contact', async (req, res, next) => {
  try {
    const isContactExist = await Contact.findOne({name: req.body.name});
    if(isContactExist) {
      await Contact.updateOne(
        {name: req.body.name},
        {
          $set: {
            name: req.body.new_name,
            email: req.body.email,
            phoneno:req.body.phoneno,
            address:req.body.address
          }
        }
      )
      .then(() => {
        res.status(200).json({
          message: 'Contact Updated Successfully'
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
        message: `Contact Not Found`
      })
    }
  } catch(err) {
    next(err);
  }
})

router.put('/update-contact-byid', async (req, res, next) => {
  try {
    const isContactExist = await Contact.findById({_id:req.body.id});
    if(isContactExist) {
      await Contact.updateOne(
        {_id: req.body.id},
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            phoneno:req.body.phoneno,
            address:req.body.address
          }
        }
      )
      .then(() => {
        res.status(200).json({
          message: 'Contact Updated Successfully'
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
        message: `Contact Not Found`
      })
    }
  } catch(err) {
    next(err);
  }
})


router.delete('/delete-contact',async (req,res,next)=>{
  try{
    const isContactExist = await Contact.findOne({name: req.body.email});
    if(isContactExist){
      await Contact.deleteOne(
        {name:req.body.email}
      )
      .then(()=>{
        res.status(200).json({
          message:'Contact Deleted Successfully'
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
        message:'Contact not found'
      })
    }
  } catch(err){
    next(err);
  }
})

router.delete('/delete-contact-byid',async (req,res,next)=>{
  try{
    const isContactExist = await Contact.findById({_id: req.body.id});
    if(isContactExist){
      await Contact.deleteOne(
        {_id:req.body.id}
      )
      .then(()=>{
        res.status(200).json({
          message:'Contact Deleted Successfully'
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
        message:'Contact not found'
      })
    }
  } catch(err){
    next(err);
  }
})

router.delete('/delete-all', async (req, res, next) => {
  try {
    let allContacts = await Contact.deleteMany({});
    res.status(200).json({
      message: `All Contacts Deleted Successfully`
    })
  } catch(err) {
    next(err);
  }
})

module.exports = router;