// src/controllers/alumnosLibrosController.js
const db = require('../database/models');

const alumnosLibrosController = {
    list: async (req, res) => {
        try {
            const alumnos = await db.alumnos.findAll({ 
                include: [{ model: db.Libros, as: 'libros' }] 
            });
            res.render('alumnosLibrosList', { alumnos });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al cargar la lista de alumnos y sus libros asignados.');
        }
    },

    editForm: async (req, res) => {
        const alumnoId = req.params.id;
        try {
            const alumno = await db.alumnos.findByPk(alumnoId, {
                include: [{ model: db.Libros, as: 'libros' }]
            });
            const libros = await db.Libros.findAll();
            res.render('alumnoLibroEdit', { alumno, libros });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al cargar el formulario de edición.');
        }
    },

    update: async (req, res) => {
        const alumnoId = req.params.id;
        const { nombre, apellido, email, dni, libroId } = req.body;
        try {
            const alumno = await db.alumnos.findByPk(alumnoId);
            if (!alumno) {
                return res.status(404).send('Alumno no encontrado');
            }
            await alumno.update({ nombre, apellido, email, dni });

            // Actualizamos la asignación del libro
            await alumno.setLibros([libroId]);

            res.redirect('/alumnos-libros');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al actualizar el alumno y su libro asignado.');
        }
    },

    delete: async (req, res) => {
        const alumnoId = req.params.id;
        try {
            // Desasignar libros del alumno antes de eliminarlo
            const alumno = await db.alumnos.findByPk(alumnoId);
            await alumno.setLibros([]);
            
            // Eliminar al alumno
            await db.alumnos.destroy({ where: { id: alumnoId } });
            res.redirect('/alumnos-libros');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al eliminar el alumno y desasignar su libro.');
        }
    }
};

module.exports = alumnosLibrosController;

