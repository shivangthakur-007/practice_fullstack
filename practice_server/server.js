import {config} from 'dotenv';
config();
import app from "./app.js";

const PORT = process.env.PORT || 500
app.listen(PORT, async()=>{
    console.log(`Post is running at https://localhost:${PORT}`)
})

