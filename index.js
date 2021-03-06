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
        firtName: req.body.name,
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
router.put('/personas/:documentID', (req, res) => {
    const doc = req.params.documentID
    Persona.updateOne({ documentID: doc }, function (err, datos) {
            typeDoc = req.body.typeDoc,
            firtName = req.body.name,
            lastName = req.body.lastName,
            address = req.body.address,
            email = req.body.email,
            landline = req.body.landline,
            phone = req.body.phone,
            webSite = req.body.webSite,
            description = req.body.description
    })
})

/* Borrar persona de base datos */
router.delete('/personas', (req, res) => {
    const doc = req.body.doc
    Persona.deleteOne({ documentID: doc }, function (err, dato) {
        if (err) {
            res.send("No se pudo borrar persona")
        } else {
            res.send("Se borro exitosamente")
        }
    })
})
/* master master */
app.use(router);

app.listen(3003, () => {
    console.log("Servidor funciona");
});