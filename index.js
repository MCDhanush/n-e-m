import express from "express";
import { MongoClient } from "mongodb";
import moviesroute from "../n-e-m/routes/movies.route.js"
import *as dotenv from "dotenv";
dotenv.config()



const app = express();
console.log(process.env.MONGO_URL);
const PORT = process.env.PORT;

app.use(express.json())

// const MONGO_URL = "mongodb://127.0.0.1";
// changes in this line after login mongo atlas
const MONGO_URL = process.env.MONGO_URL; 
const client = new MongoClient(MONGO_URL) 
await client.connect();
console.log("Mongo is connected");

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊 dhanush mc ");
});

app.use("/movies",moviesroute)
// app.get("/movies",function(request,response){
//   response.send(movies)
// })


// async function getHassedPassword(password){
//   const NO_OF_ROUNDS = 10;
//   const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
//   const hashedPassword = await bcrypt.hash(password,salt);
//   console.log(salt)
//   console.log(hashedPassword);
// }
// getHassedPassword("password@123")


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client}