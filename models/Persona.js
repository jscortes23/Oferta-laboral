const mongoose = require('mongoose')

/* Creacion de modelo de persona */
let PersonaSchema = new mongoose.Schema({
    typeDoc: String,
    documentID: Number,
    name: String,
    lastName: String,
    address: String,
    email: String,
    landline: Number,
    phone: Number,
    webSite: String,
    description: String
})

/* Para  usar fuera del modulo */
module.exports = mongoose.model('persona',PersonaSchema, 'Personas')