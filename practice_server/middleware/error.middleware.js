const errorMiddleware =(err, req, res, next)=>{
    err.statuscode= err.statuscode || 500;
    err.message= err.message || 'Something Went Wrong';
    res.status(err.statuscode).json({
        success: false,
        message: err.message,
        stack: err.stack
    })
}

export default errorMiddleware;