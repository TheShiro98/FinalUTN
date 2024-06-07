// src/controllers/alumnosController.js
const db = require('../database/models');

const alumnosController = {
    list: (req, res) => {
        db.alumnos.findAll({
            include: ['libros']
        })
        .then(alumnos => {
            res.render('alumnosList.ejs', { alumnos });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al recuperar la lista de alumnos y sus libros asociados');
        });
    },
    createForm: (req, res) => {
        res.render('createAlumno.ejs');
    },
    create: (req, res) => {
        db.alumnos.create(req.body)
        .then(() => {
            res.redirect('/alumnos');
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al crear el alumno');
        });
    },
    editForm: (req, res) => {
        db.alumnos.findByPk(req.params.id, {
            include: ['libros']
        })
        .then(alumno => {
            res.render('editAlumno.ejs', { alumno });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al buscar el alumno');
        });
    },
    edit: (req, res) => {
        db.alumnos.update(req.body, {
            where: { id: req.params.id }
        })
        .then(() => {
            res.redirect('/alumnos');
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al actualizar el alumno');
        });
    },
    delete: (req, res) => {
        db.alumnos.destroy({
            where: { id: req.params.id }
        })
        .then(() => {
            res.redirect('/alumnos');
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al eliminar el alumno');
        });
    }
};

module.exports = alumnosController;
