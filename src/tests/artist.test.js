// const request = require("supertest")
// const app = require("../app");
// require("../models")
// const Artist = require("../models/Artist");
// const Genre = require("../models/Genre");

// let artistId;
// let data = {
//     "name": "Marc Anthony",
//     "country": "Puerto Rico",
//     "formationYear": 1983,
//     "image": "image"
// }

// let dataGenre = { name: "Rock"}


// test("GET /artists should return status 200", async() => {
//     const res = await request(app).get("/artists");
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toHaveLength(2);
//     expect(res.body[0].genres).toBeDefined()
// })

// test("POST /artists should return status 201", async() => {
//     const res = await request(app).post("/artists").send(data);
//     artistId = res.body.id
//     expect(res.statusCode).toBe(201);
//     expect(res.body.name).toBe(data.name)
// })

// test("GET /artists/:id to getOne should return status 200", async() => {
//     const res = await request(app).get(`/artists/${artistId}`);
//     expect(res.statusCode).toBe(200);
//     expect(res.body.name).toBe(data.name)
//     expect(res.body.genres).toBeDefined()
// })

// test("POST /:id/genres should return status 201", async() =>{
//     const genre = await Genre.create(dataGenre);
//     const res = await request(app).post(`/artists/${artistId}/genres`).send([genre.id]);
//     await genre.destroy()
//     expect(res.statusCode).toBe(200);
//     expect(res.body.length).toBe(1)
// })

// test("PUT /artists/:id should return status 201", async() => {
//     const res = await request(app).put(`/artists/${artistId}`).send({"name": "Juancho"});
//     expect(res.statusCode).toBe(200);
//     expect(res.body.name).toBe("Juancho")
// })

// test("DELETE /artists/:id should return status 204", async() => {
//     const res = await request(app).delete(`/artists/${artistId}`);
//     expect(res.statusCode).toBe(204);
// })