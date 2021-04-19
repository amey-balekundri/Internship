const express = require('express');
const router = express.Router();

let people=[]

router.put('/first-api/:firstname/:lastname', async (req, res, next) => {
  try {
    firstname=req.params.firstname
    lastname=req.params.lastname
    people.push({firstname,lastname})
    res.status(200).json(
      {
        people:people
      }
    )
  } catch(err) {
    next(err);
  }
});

router.delete('/second-api', async (req, res, next) => {
  try {
    people.pop()
    res.status(200).json(
      {
       people:people
      }
    )
  } catch(err) {
    next(err);
  }
});


module.exports = router;