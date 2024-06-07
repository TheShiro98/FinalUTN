// src/routes/alumnosLibrosRoutes.js
const express = require('express');
const router = express.Router();
const alumnosLibrosController = require('../controllers/alumnosLibrosController');

router.get('/alumnos-libros', alumnosLibrosController.list);
router.get('/alumnos-libros/edit/:id', alumnosLibrosController.editForm);
router.post('/alumnos-libros/edit/:id', alumnosLibrosController.update);
router.post('/alumnos-libros/delete/:id', alumnosLibrosController.delete);

module.exports = router;
