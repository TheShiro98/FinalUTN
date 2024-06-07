// Acá hacemos un get para traer los datos de la base de datos

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('index', {title: "Biblioteca UTN"});
});


module.exports = router;