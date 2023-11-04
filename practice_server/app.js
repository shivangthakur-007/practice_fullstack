import  express  from "express";
import cookieParser from "cookie-parser";
import namerouter from "./Router/router.js";
import cors from "cors";
import morgan from "morgan";
import errorMiddleware from "./middleware/error.middleware.js";
import storeRouter from "./Router/store.Router.js";

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}))

app.use(cookieParser());

app.use('/ping', (req, res)=>{
    res.send('/pong');
})
app.use('/api/vi/user', namerouter);
app.use('/api/vi/store', storeRouter);

app.all("*", (req, res) => {
  res.status(404).send("OOPS!! Page not found");
});

app.use(morgan('dev'));

app.use(errorMiddleware);

export default app;