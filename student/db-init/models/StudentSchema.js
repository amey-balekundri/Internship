const express = require('express');
const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema(
  {
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true, index: true},
    contact: [{type: Number}],
    password: {type: String},
    subjects: [{type: mongoose.Schema.Types.ObjectId}]
  },
  {collection: 'students'}
);

let studentModel = mongoose.model('student', studentSchema)

module.exports=studentModel;
