const mongoose = require('mongoose')

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

module.exports = mongoose.model('persona',PersonaSchema, 'Personas')