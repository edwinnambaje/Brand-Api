const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');

const app=express();
dotenv.config();
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(console.log('Connected to MongoDb'))
.catch((error)=>console.log(error))


app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.listen("3000",()=>{
    console.log('Backend is running');
})