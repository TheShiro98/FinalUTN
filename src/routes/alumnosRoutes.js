// src/routes/alumnosRoutes.js
const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');

router.get('/alumnos', alumnosController.list);
router.get('/alumnos/create', alumnosController.createForm);
router.post('/alumnos/create', alumnosController.create);
router.get('/alumnos/edit/:id', alumnosController.editForm);
router.post('/alumnos/edit/:id', alumnosController.edit);
router.post('/alumnos/delete/:id', alumnosController.delete);

module.exports = router;
