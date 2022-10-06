const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/',async (req,res) => {

   const userOne = new User({
      name : req.body.name,
      email : req.body.email,
      username : req.body.username,
      password : req.body.password
   })

   try {
      const saved = await userOne.save();
      res.json(saved);
   }catch (error){
      res.send(error);
   }

});

router.get('/', async (req,res) => {
   try {
      const users = await User.find();
      res.json(users);
   } catch (error){
      res.send(error);
   }

});


module.exports = router;