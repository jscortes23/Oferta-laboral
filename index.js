const express = require('express');
const mongoose = require('mongoose');
const Persona = require('./models/Persona.js');
const app = express();

const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb+srv://joan:cali199911@clusterprogweb.qka5w.mongodb.net/inscripcion?retryWrites=true&w=majority");

/* Creacion del CRUD */

/* Crear Persona en base de adtos MongoDB */
router.post('/personas', (res, req) => {
    let nuevaPersona = new Persona({
        typeDoc: req.body.typeDoc,
        documentID: req.body.documentID,
        name: req.body.name,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        landline: req.body.landline,
        phone: req.body.phone,
        webSite: req.body.webSite,
        description: req.body.description
    })
    nuevaPersona.save(function (err, datos) {
        if (err) {
            console.log(err);
        }
        res.send("Persona almacenada correctamente")
    })
})

/* Leer Base de datos*/
router.get('/personas', (res, req) => {
    Persona.find(function (err, datos) {
        if (err) {
            console.log("Error al leer la perosna")
        } else {
            res.send(datos)
        }
    })
})


app.listen(3003, () => {
    console.log("Servidor funciona");
});