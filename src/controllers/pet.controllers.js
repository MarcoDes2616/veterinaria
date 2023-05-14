const catchError = require('../utils/catchError');
const Pet = require('../models/Pet');
const User = require('../models/User');


//ENDPOINT DE USUARIO 3 --- CREAR UN PET
const createPet = catchError(async(req, res) => {
    const result = await Pet.create({...req.body, userId: req.user.id});
    return res.status(201).json(result);
});

//ENDPOINT DE USUARIO 4 --- VISTA DE MASCOTAS
const getPetsByUser = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Pet.findByPk(id, {where: {userId: req.user.id}});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

//ENDPOINT DE USUARIO 5 --- VISTA DE MASCOTAS
const updatePet = catchError(async(req, res) => {
    const { id } = req.params;
    const pet = await Pet.findByPk(id)
    if(pet.userId != req.user.id) return res.status(401).json({message: Unauthorized})
    const result = await Pet.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

//ENDPOINT DE USUARIO 6 --- ELIMINAR MASCOTAS
const removePet = catchError(async(req, res) => {
    const { id } = req.params;
    const pet = await Pet.findByPk(id)
    if(pet.userId != req.user.id) return res.status(401).json({message: Unauthorized})
    await Pet.update({status: false}, { where: {id} });
    return res.sendStatus(204);
});


// ENDPOINT DEL SISTEMA
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Pet.findByPk(id, {include: [User]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});


module.exports = {
    createPet,
    // getAll,
    getOne,
    removePet,
    updatePet,
    getPetsByUser
}