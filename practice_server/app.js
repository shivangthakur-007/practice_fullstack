import  express  from "express";

var app=express();

app.use('/', (req, res)=>{
    res.send('/pong')
})
export default app;