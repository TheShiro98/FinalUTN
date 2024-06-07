const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// Ruta para obtener la lista de libros
router.get('/libros', librosController.list);
router.get('/libros/create', librosController.createForm);
router.post('/libros/create', librosController.create);
router.get('/libros/edit/:id', librosController.editForm);
router.post('/libros/edit/:id', librosController.edit);
router.post('/libros/delete/:id', librosController.delete);

module.exports = router;
