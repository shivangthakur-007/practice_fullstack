import  express  from "express";
import morgan from "morgan";
import cors from "cors"
var app=express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use('/', (req, res)=>{
    res.send('/pong');
})
app.use(morgan('dev'));

export default app;