import express from "express";
import { MongoClient } from "mongodb";
import moviesRoute from "../n-e-m/routes/movies.route.js"
import usersRoute from "./routes/users.route.js"
// import mobileRoute from "./routes/mobile.route.js"
import * as dotenv from "dotenv";

// import bcrypt from 'bcrypt'
import cors from "cors"
dotenv.config()



const app = express();
// console.log(process.env.MONGO_URL);
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors()) //3rd party appplication for give datas to react

// const MONGO_URL = "mongodb://127.0.0.1";
// changes in this line after login mongo atlas
const MONGO_URL = process.env.MONGO_URL; 
const client = new MongoClient(MONGO_URL) 
await client.connect();
console.log("Mongo is connected");

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊 dhanush mc ");
});

app.use("/movies",moviesRoute)
app.use("/users",usersRoute)

// const mobiels=[{
//     "model": "OnePlus 9 5G",
//     "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     "company": "Oneplus"
//     },
//     {
//     "model": "Iphone 13 mini",
//     "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
//     "company": "Apple"
//     },
//     {
//     "model": "Samsung s21 ultra",
//     "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
//     "company": "Samsung"
//     },
//     {
//     "model": "Xiomi mi 11",
//     "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
//     "company": "Xiomi"
//     }
//     ]


app.get("/mobiles",async function(request,response){
  const mobile = await client
  .db("mndata1").collection("mobiles").find({}).toArray();
  response.send(mobile)
})



app.post("/mobiles",async function(request,response){
  const data = request.body;
  console.log(data);
  const result =await client.db("mndata1").collection("mobiles").insertMany(data);
  response.send(result)
})

// app.get("/movies",function(request,response){
//   response.send(movies)
// })

// async function getHashedPassword(password){
//   const NO_OF_ROUNDS = 10;
//   const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
//   const hashedPassword = await bcrypt.hash(password,salt);
//   console.log(salt)
//   console.log(hashedPassword);
// }
// getHashedPassword("password@123")


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client}