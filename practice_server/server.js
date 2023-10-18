import {config} from 'dotenv';
config();
import app from "./app.js";
import connectionToDB from './Config/dbConnection.js';
import cloudinary from 'cloudinary';

const PORT = process.env.PORT || 5014;
    
    cloudinary.v2.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true
    })

app.listen(PORT, async()=>{
    await connectionToDB();
    console.log(`Port is running at https://localhost:${PORT}`)
})

