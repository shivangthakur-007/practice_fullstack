import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./Router/router.js";
var app=express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use('/ping', (req, res)=>{
    res.send('/pong');
})
app.use('/api/vi/user', router);


app.all("*", (req, res) => {
  res.status(404).send("OOPS!! Page not found");
});

app.use(morgan('dev'));

export default app;