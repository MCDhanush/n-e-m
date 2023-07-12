import  jwt  from "jsonwebtoken";
// import { request } from "express";

export const auth  =(request,response,next) =>{
   try{ const token = request.header("x-auth-token")
    console.log(token)
    jwt.verify(token,process.env.SECRECT_KEY)
    next()
}catch (err){
 response.status(401).send({err:"token not valid"})
    }
}
