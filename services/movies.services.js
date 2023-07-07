import { client } from "../index.js";

export async function getMovie() {
    return await client.db("mndata1").collection("movies").find({}).toArray();
}
export async function getMoviebyId(id) {
    return await client
        .db("mndata1")
        .collection("movies")
        .findOne({ id: id });
}
export async function deleteMoviebyId(id) {
    return await client
        .db("mndata1")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function updateMoviebyId(id, data) {
    return await client
        .db("mndata1")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function createMovies(data) {
    return await client.db("mndata1").collection("movies").insertMany(data);
}
