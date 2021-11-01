const express = require('express');
const mongoose = require('mongoose');
const Persona = require('./models/Persona.js');
const app = express();

const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb+srv://joan:cali199911@clusterprogweb.qka5w.mongodb.net/inscripcion?retryWrites=true&w=majority");

/* Creacion del CRUD */

/* Crear persona base de datos*/
router.post('/personas', (req, res) => {
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
router.get('/personas', (req, res) => {
    Persona.find(function (err, datos) {
        if (err) {
            console.log("Error al leer la perosna")
        } else {
            res.send(datos)
        }
    })
})

/* Modificar la persona en la base de datos */
router.put('/personas/:id', (req, res) => {
    Persona.findByIdAndUpdate(req.params.id, function (err, datos) {
        Persona.typeDoc = req.body.typeDoc,
        Persona.documentID = req.body.documentID,
        Persona.name = req.body.name,
        Persona.lastName = req.body.lastName,
        Persona.address = req.body.address,
        Persona.email = req.body.email,
        Persona.landline = req.body.landline,
        Persona.phone = req.body.phone,
        Persona.webSite = req.body.webSite,
        Persona.description = req.body.description
    })
})

/* Borrar persona de base datos */
/* router.delete('/personas/:id', (req, res) => {
    const borrar = Persona.findByIdAndDelete({_id: req.params.id})
    res.send("Se borro exitosamente")
}) */

app.use(router);

app.listen(3003, () => {
    console.log("Servidor funciona");
});