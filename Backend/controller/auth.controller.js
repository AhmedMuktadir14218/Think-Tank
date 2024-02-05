import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next)=>{
      const { username, email, password } = req.body;
      

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400,"All field are required"));
  }
  const hashPassword = bcryptjs.hashSync(password,10);

  const newUser = new User({
    username:username,
    email: email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } 
  catch (error) {
    // return res.status(500).json({message:error.message});
    next(error);
  }
};
