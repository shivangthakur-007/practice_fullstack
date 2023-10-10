

async function bodyParser(req, res, next){
    const name=await req.body.name;
    res.send('User created successfully');
    next();
}

export default bodyParser;