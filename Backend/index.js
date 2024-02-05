import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

mongoose.connect(process.env.MONGODB)
.then(()=>{
console.log('mongoDB is connected')
})

const app = express()
app.use(express.json());

app.listen(3000, ()=>{
 console.log('3000 server is running');
})
app.use('/',userRoute)
app.use('/api/auth',authRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    })
})