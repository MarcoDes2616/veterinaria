const sequelize = require('../utils/connection');
const {
    createDataArtist,
    createDataGenre,
    createDataAlbum,
    createDataSong
} = require('./data/data');
// require("../models")


const main = async() => {
    try{
        await sequelize.sync({ force: true });
        // await createDataGenre()
        // await createDataArtist()
        // await createDataAlbum()
        // await createDataSong()
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();