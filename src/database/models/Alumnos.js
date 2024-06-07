// src/database/models/Alumnos.js
module.exports = (sequelize, DataTypes) => {
    let alias = "alumnos";
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        underscored: false
    };

    const Alumnos = sequelize.define(alias, cols, config);

    Alumnos.associate = function (models) {
        Alumnos.hasMany(models.Libros, {
            as: "libros",
            foreignKey: "id_alumnos"
        });
    };

    return Alumnos;
};
