import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

export const signupUser= async(req, res)=> {
    const { username, email, password } = req.body;

    try {
        //check if the user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

      const user = new User({ username, email, password });
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

export const loginUser= async(req, res)=> {
    try {
        const { email, password } = req.body;
        console.log("login user")
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await user.matchPassword(password)
        if (isMatch){
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'User logged in successfully', token}) ;
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

export const getMe = async (req, res)=> {
    try {
        // Extract user from request (set by auth middleware)
        const user = req.user;
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error to get the user' });
    }
}