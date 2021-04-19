const express = require('express');
const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema(
  {
    name : {type: String, required: true},
    marks : {type:Number,required: true}
  },
  {collection: 'subjects'}
);

let studentModel = mongoose.model('subject', studentSchema)

module.exports=studentModel;
