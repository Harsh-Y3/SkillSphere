import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';
export const signup = async (req, res, next) => 
    {
        const { username, email, password } = req.body;
        const hasedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({ username, email, password: hasedPassword });
        try
        {
            await newUser.save()
            res.status(201).json({ message: 'User created successfully!' });
        }
        catch(error)
        
        {
            next(errorHandler(550, 'User Already Exists'));
        }
    };


export const sigin = async (req, res, next) =>
{
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email})
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'wrong cridential'));
        const token = jwt.sign({id: validUser._id, isAdmin: validUser.isAdmin}, process.env.JWT_SECRET);
        const {password: pass, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
    } catch (err) {
        next(err)
    }
}