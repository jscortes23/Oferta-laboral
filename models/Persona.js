const mongoose = require('mongoose')

/* Creacion de modelo de persona */
let PersonaSchema = new mongoose.Schema({
    typeDoc: String,
    documentID: Int32Array,
    name: String,
    lastName: String,
    address: String,
    email: String,
    landline: Int16Array,
    phone: Int32Array,
    webSite: String,
    description: String
})

/* Para  usar fuera del modulo */
module.exports = mongoose.model('persona',PersonaSchema, 'Personas')