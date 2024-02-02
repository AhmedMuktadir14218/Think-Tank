import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGODB)
.then(()=>{
console.log('mongoDB is connected')
})
const app = express()
app.listen(3000, ()=>{
 console.log('3000 server is running');
})