import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/generateToken.js';

export const signup = async (req, res) => {
    const { name, email, phone, password, role } = req.body;

    try {
        // Check if user already exists by email or phone
        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Email or phone already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword,
            role: role
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id, user.name, user.role);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        })
        res.status(200).json({ message: "Logging in" });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// stpring token in cookie

// verified status in db
