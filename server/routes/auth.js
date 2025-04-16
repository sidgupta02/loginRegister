const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

router.post('/register', async(req,res)=>{
  const {name, email, password} = req.body;

  try{
    //check if user exists
    const existingUser = await User.findOne({email});
    if(existingUser) return res.status(400).json({message: 'User already exists'});

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //save user
    const newUser = new User({name, email, password: hashedPassword});
    await newUser.save();

    res.status(201).json({message: 'user registered successfully'});
  } catch(err){
    console.log(err);
    res.status(500).json({message: 'Server error during resitration'});
  }
});

router.post('/login', async(req,res)=> {
  const {email, password} = req.body;

  try{
    //check if user exists
    const user =await User.findOne({email});
    if(!User) return res.status(400).json({message: 'Invalid email or password'});

    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message: 'Invalid email or password'});

    //create jwt token
    const payload = {id: user._id};
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'});

    res.status(200).json({ message: 'Login successful', token });
  } catch(err){
    console.error(err);
    res.status(500).json({ message: 'Server error during login' });
  }
});


module.exports = router;