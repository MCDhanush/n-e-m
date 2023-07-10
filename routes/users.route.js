import express from "express";
import { createUser,getUserByName } from "../services/users.services.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

// 1
const router = express.Router()
async function getHashedPassword(password){
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hashedPassword = await bcrypt.hash(password,salt);
    // console.log(salt)
    // console.log(hashedPassword);
    return hashedPassword
  }


// * post data 2
// * express.json() it is an middleware / converts data to json

  router.post("/signup",async function(request,response){
    const {username,password}=request.body;
    // db.movies.insetOne(data)
    console.log(password)

    const userFromDB = await getUserByName(username);
    console.log(userFromDB);
    if(userFromDB){
        response.status(400).send({message:"uername already exists"})
    }else if(password.lenght < 8){
     response
     .status(400)
     .send({message:"Password must be at least 8 character"})
    }else{
        const hashedPassword =await getHashedPassword(password)
        console.log(password,hashedPassword);
    
     const result = await createUser({
        username : username,
        password : hashedPassword
    })
    response.send(result)
  
}})   


router.post("/login",async function(request,response){
  const {username,password}=request.body;
  // db.movies.insetOne(data)
  // console.log(password)

  const userFromDB = await getUserByName(username);
  console.log(userFromDB,password);
  if(!userFromDB){
      response.status(401).send({message:"Invalid credantials"})
  }else {
    const sotredDBPassword = userFromDB.password
    const isPasswordMatch = await bcrypt.compare(password,sotredDBPassword);
    console.log(isPasswordMatch);
    if(isPasswordMatch){
      const token = jwt.sign({id:userFromDB._id},process.env.SECRECT_KEY)
      response.send({message:"Succesfully logined",token:token})
    }else{
      response.status(401).send({message:"Invalid credantials"})
    }
  }

})   
  
  export default router


