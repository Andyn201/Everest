const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets');
const { check, validationResult } = require('express-validator');



//   Create New User
router.post('/', 
//   Validation
[
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists().isLength({ min: 6 })
],

async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(errors);
    }


    try{
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if (user) {
          return res.send('User already Exists');
        }


        //   Create new User and Encrypt Password
        user = new User({
            email,
            password
          });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //   Create Web Token for Authentication

        const payload = {
          user: {
            id: user.id
          }
        };


        jwt.sign(payload, jwtSecret, { expiresIn: 10000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
          });

    }
    catch(err){
      console.error(err);
      res.status(500).send('Server error');
    }
});







module.exports = router;