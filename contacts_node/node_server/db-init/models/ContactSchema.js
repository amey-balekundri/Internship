const express = require('express');
const mongoose = require('mongoose');

let contactSchema = new mongoose.Schema(
  {
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true, index: true},
    phoneno: {type: Number,required: true,unique:true},
    address:{type:String},
  },
  {collection: 'contacts'}
);

let contactModel = mongoose.model('contact', contactSchema)

module.exports=contactModel;
