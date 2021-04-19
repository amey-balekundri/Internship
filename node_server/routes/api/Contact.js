const express = require('express');
const router = express.Router();

router.get('/first-api/:firstname/:lastname', async (req, res, next) => {
  try {
    message = `Welcome to nodejs ${req.params.firstname} ${req.params.lastname}`
    res.status(200).json(
      {

        message: message
      }
    )
  } catch(err) {
    next(err);
  }
});

router.post('/second-api', async (req, res, next) => {
  try {
    message = `Welcome to nodejs`
    res.status(200).json(
      {
        message,
        data: "gbcusgbc"
      }
    )
  } catch(err) {
    next(err);
  }
});


module.exports = router;