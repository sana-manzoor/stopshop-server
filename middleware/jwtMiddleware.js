const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    console.log("inside jwt middleware!!")
   
    try{
        const token=req.headers.authorization.split(" ")[1]
         console.log(token)
        const result=jwt.verify(token,"secretid")
        console.log(result)
        req.payload=result.userId
        next()
    }
    catch(err){
        res.status(401).json("Authorization Failed!Login First!!" +err)
    }
}

module.exports=jwtMiddleware