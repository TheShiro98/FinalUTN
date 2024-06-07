// Con esto puedo traer los datos de la base de datos desde el models
const db = require('../database/models');

const librosController = {
    list: async (req, res) => {
        try {
            // Obtener todos los libros de la base de datos
            const libros = await db.Libros.findAll({ include: ['alumnos'] });
            res.render('librosList.ejs', { libros });
        } catch (error) {
            console.error('Error al recuperar la lista de libros:', error);
            res.status(500).send('Hubo un error al recuperar la lista de libros');
        }
    },
    createForm: (req, res) => {
        // Renderizar el formulario de creación de libros
        res.render('createLibro.ejs');
    },

    create: async (req, res) => {
        try {
            // Crear un nuevo libro con los datos del formulario
            const { titulo, autor, id_alumnos } = req.body;
            await db.Libros.create({ titulo, autor, id_alumnos });

            // Redireccionar a la lista de libros después de la creación exitosa
            res.redirect('/libros');
        } catch (error) {
            console.error('Error al crear el libro:', error);
            res.status(500).send('Hubo un error al crear el libro');
        }
    },
    editForm: (req, res) => {
        let libroRequest = db.Libros.findByPk(req.params.id);
        let alumnosRequest = db.alumnos.findAll();

        Promise.all([libroRequest, alumnosRequest])
        .then(([libro, alumnos]) => {
            res.render('editLibro.ejs', { libro, alumnos });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al cargar el formulario de edición de libros');
        });
    },
    edit: (req, res) => {
        db.Libros.update(req.body, {
            where: { id: req.params.id }
        })
        .then(() => {
            res.redirect('/libros');
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al actualizar el libro');
        });
    },
    delete: (req, res) => {
        db.Libros.destroy({
            where: { id: req.params.id }
        })
        .then(() => {
            res.redirect('/libros');
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Hubo un error al eliminar el libro');
        });
    }
    
}

module.exports = librosController;
