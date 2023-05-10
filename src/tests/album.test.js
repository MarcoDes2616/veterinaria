// const request = require("supertest")
// const app = require("../app");
// const Artist = require("../models/Artist");
// require("../models")

// let albumId;
// let data = {
//     "name": "Mas",
//     "image": "image",
//     "releaseYear": 1983,
// }
// let dataArtist = {
//     "name": "Juan Luis Guerra",
//     "country": "Puerto Rico",
//     "formationYear": 1983,
//     "image": "image"
// }

// test("GET /albums should return status 200", async() => {
//     const res = await request(app).get("/albums");
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toHaveLength(2);
//     expect(res.body[0].artist).toBeDefined()
//     expect(res.body[0].songs).toBeDefined()
// })

// test("POST /albums should return status 201", async() => {
//     const res = await request(app).post("/albums").send(data);
//     albumId = res.body.id
//     expect(res.statusCode).toBe(201);
//     expect(res.body.name).toBe(data.name)
// })

// test("POST /:id/artists should return status 201", async() =>{
//     const artist = await Artist.create(dataArtist);
//     const res = await request(app).post(`/albums/${albumId}/artists`).send([artist.id]);
//     await artist.destroy()
//     expect(res.statusCode).toBe(201);
//     expect(res.body.length).toBe(1)
// })

// test("GET /albums/:id to getOne should return status 200", async() => {
//     const res = await request(app).get(`/albums/${albumId}`);
//     expect(res.statusCode).toBe(200);
//     expect(res.body.name).toBe(data.name)
//     expect(res.body.artist).toBeDefined()
//     expect(res.body.songs).toBeDefined()
// })

// test("PUT /albums/:id should return status 201", async() => {
//     const res = await request(app).put(`/albums/${albumId}`).send({"name": "Otra"});
//     expect(res.statusCode).toBe(200);
//     expect(res.body.name).toBe("Otra")
// })

// test("DELETE /albums/:id should return status 204", async() => {
//     const res = await request(app).delete(`/albums/${albumId}`);
//     expect(res.statusCode).toBe(204);
// })