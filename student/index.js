const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const student=require('./routes/Student');
const subject=require('./routes/Subject');

app.use(cors());
app.use(bodyParser.json());
app.use(logger('common'));

const mongoUrl = "mongodb://localhost:27017/students";

mongoose
  .connect(mongoUrl, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  .then(() => {
    console.log('Database Connected Successfully')
  })
  .catch((err) => {
    console.log(`MongoDB Connection Error ${err}`)
  })

app.listen(5000, () => {console.log('SERVER IS RUNNING ON localhost:5000')})

app.use((err, req, res, next) => {
  next(error(err, req, res, next));
})

app.use("/api/student", student);
app.use("/api/subject",subject);

module.exports = app;