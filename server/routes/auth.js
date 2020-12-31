const express = require('express')
const userController = require('../controllers/userController');
const router = express.Router()

router.post(
  '/signup',
  userController.createUser,
  (req, res) => {
    return res.sendStatus(200);
  }
);

router.post(
  '/signin',
  userController.verifyUser,
  (req, res) => {
    return res.sendStatus(200);
  }
);

router.post(
  '/verify',
  userController.checkUser,
  (req, res) =>{
    return res.send(res.locals.nameExists)
  }
)

module.exports = router