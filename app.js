const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');
const postRoute=require('./routes/post');
const catRoute=require('./routes/category');
const messageRoute=require('./routes/message');
const swaggerDocs=require('./docs/swagger');
const app=express();
dotenv.config();
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(console.log('Connected to MongoDb'))
.catch((error)=>console.log(error))
swaggerDocs(app);
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories',catRoute)
app.use('/api/messages',messageRoute);
module.exports=app