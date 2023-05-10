// const Album = require("../../models/Album")
// const Artist = require("../../models/Artist")
// const Genre = require("../../models/Genre")
// const Song = require("../../models/Song")


// const createDataArtist = async() => {
//     const data = [
//         {
//             "name": "Marc Anthony",
//             "country": "Puerto Rico",
//             "formationYear": 1983,
//             "image": "image"
//         },
//         {
//             "name": "Juan Luis Guerra",
//             "country": "Puerto Rico",
//             "formationYear": 1983,
//             "image": "image"
//         }
//     ]

//     await Artist.bulkCreate(data)
// }

// const createDataAlbum = async() => {
//     const data = [
//         {
//             "name": "Mas",
//             "image": "image",
//             "releaseYear": 1983,
//             "artistId": 1
//         },
//         {
//             "name": "Menos",
//             "releaseYear": 1983,
//             "image": "image",
//             "artistId": 1
//         }
//     ]

//     await Album.bulkCreate(data)
// }

// const createDataSong = async() => {
//     const data = [
//         {
//             name: "Fuego de noche",
//             albumId: 1
//         },
//         {
//             name: "Nieve de dia",
//             albumId: 1
//         }
//     ]

//     await Song.bulkCreate(data)
// }

// const createDataGenre = async() => {
//     const data = [
//         {
//             name: "Baladas"
//         },
//         {
//             name: "Pop"
//         }
//     ]

//     await Genre.bulkCreate(data)
// }

// module.exports = {
//     createDataArtist,
//     createDataGenre,
//     createDataAlbum,
//     createDataSong
// };