import express from "express";
// import {auth} from "../middleware/auth.js"
import { getMovie, getMoviebyId, deleteMoviebyId, updateMoviebyId, createMovies } from "../services/movies.services.js";
const router = express.Router()


// find 
router.get("/",async function(request,response){
    console.log(request.query)
    const movie= await getMovie();
    response.send(movie)
  })


  // Get data
  router.get("/:id",async function(request,response){
    const{id}=request.params;
    console.log(id)
    // const movie = movies.find((e)=>e.id===id)
    const movie = await getMoviebyId(id)
    console.log(movie);
    movie 
    ? response.send(movie) 
    : response.status(404).send({msg:"movie not found"})
  })   
  
  // Delete mve
  
  router.delete("/:id",async function(request,response){
    const{id}=request.params;
    // db.movies.deleteOne({id:id})
    // const movie = movies.find((e)=>e.id===id)
    const movie = await deleteMoviebyId(id)
    console.log(movie)
  
    movie.deletedCount > 0
    ? response.send( {msg : "MOvie successfully deleted"}) 
    : response.status(404).send({msg:"movie not found"})
  })   
  
  
  // Put movie
  
  router.put("/:id",async function(request,response){
    const{id}=request.params;
    const data = request.body
    // db.movies.updateOne({id:100},{$set:data})
    console.log(id)
    // const movie = movies.find((e)=>e.id===id)
    const movie = await updateMoviebyId(id, data)
    console.log(movie);
    movie 
    ? response.send(movie) 
    : response.status(404).send({msg:"movie not found"})
  })  
  
  // post data
  // express.json() it is an middleware / converts data to json
  router.post("/",async function(request,response){
    const data=request.body;
    // db.movies.insetMany({})
    console.log(data)
  
    const result = await createMovies(data)
     response.send(result);
  })   
  
  export default router


