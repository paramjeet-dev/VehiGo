import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (id,name,role) =>{
    return jwt.sign({
        userId: id,
        name: name,
        role: role
    }, process.env.JWT_SECRET, {expiresIn:'1h'})
}