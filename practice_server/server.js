import {config} from 'dotenv';
config();
import app from "./app.js";
import connectionToDB from './Config/dbConnection.js';

const PORT = process.env.PORT || 5014;

app.listen(PORT, async()=>{
    await connectionToDB();
    console.log(`Port is running at https://localhost:${PORT}`)
})

