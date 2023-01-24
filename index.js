const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');
const postRoute=require('./routes/post');
const messageRoute=require('./routes/message');
const catRoute=require('./routes/category');
const multer=require('multer');


const storage = multer.diskStorage({
    // to locate destination of a file which is being uploaded
    destination: function(res, file, callback){
        callback(null,'images');
    },

    // add back the extension to the file name
    filename: function(res, file, callback){
        callback(null, Date.now() + file.originalname);
    },

})

// upload parameters for multer for uploading images
const upload = multer({
    // multer will only accept files with these extensions
    storage: storage,
    limits:{
        fileSize: 1024* 1024* 3,
    },
})
app.post('/api/upload', upload.single('image'), async(req, res)=>{
    res.status(200).json("Image uploaded successfully")
})

const app=express();
dotenv.config();
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(console.log('Connected to MongoDb'))
.catch((error)=>console.log(error))


app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/messages',messageRoute)
app.use('/api/categories',catRoute);
let port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Backend is running');
})