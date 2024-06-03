import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

export const signupUser= async(req, res)=> {
    const { username, email, password } = req.body;

    try {
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

export const loginUser= async(req, res)=> {
    try {
        console.log("login user")
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}