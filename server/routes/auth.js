 const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res)=>{
  const {name,email,password,role} = req.body;
  const hash = await bcrypt.hash(password,10);
  const user = new User({name,email,passwordHash:hash,role});
  await user.save();
  res.json({message:'User registered'});
});

router.post('/login', async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user) return res.status(400).json({error:'User not found'});
  const valid = await bcrypt.compare(password,user.passwordHash);
  if(!valid) return res.status(400).json({error:'Invalid password'});
  const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET, {expiresIn:process.env.ACCESS_TOKEN_EXPIRES_IN});
  res.json({token,role:user.role});
});

module.exports = router;
