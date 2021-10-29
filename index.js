const express = require('express');
const mongoose = require('mongoose');
const Persona = require('./models/Persona.js');
const app = express();

const router = express.Router();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

mongoose.connect("mongodb+srv://joan:cali199911@clusterprogweb.qka5w.mongodb.net/inscripcion?retryWrites=true&w=majority");

app.listen(3003, () => {
    console.log("Servidor funciona");
});