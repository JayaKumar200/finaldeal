// const express = require('express')
// const model = require('../model/fetch.js');
// const jwt = require('jsonwebtoken');

// require('dotenv').config(); 
// const SECRET_KEY = process.env.JWT_SECRET || 'default_secret';

// const getLogin = async(req,res)=>{
//     try{
//       const {userName,password,email} = req.body;

//     const existsEmail = await model.findOne({email})
//     if(existsEmail){
//       return res.json('The userEmail is already exists').status(404)
//     }

//     const data = new model({email,password,userName})

//      await data.save()

//       const token = jwt.sign({ id: data._id, email }, SECRET_KEY, {
//         expiresIn: '1h',
//       });

//       res.status(201).json({
//         message: 'User registered successfully',
//         user: data,
//         token: token, 
//       }); 

//   }catch(err){
//     res.status(500).json({ message: 'Registration failed', error: err.message });
//   }
// }

// module.exports = {getLogin}



const User = require('../model/fetch.js');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already registered' });

    const user = new User({ userName, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });

    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

const userProduct = async (req, res) => {
  const { email, name,price } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email and product are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.products.push(product);
    await user.save();

    res.status(200).json({
      message: "Product stored successfully!",
      products: user.products,
    });
  } catch (err) {
    console.error("Error storing product:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};






module.exports = { signUp,userProduct };
