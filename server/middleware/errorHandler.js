export const errorHandler = (err,req,res,next) => {
    if (err){
        console.log(err)
    }
    next();
}