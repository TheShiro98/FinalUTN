// src/database/models/Libros.js
module.exports = (sequelize, DataTypes) => {
    let alias = "Libros";
    let cols = {
        id: {
            type: DataTypes.BIGINT(11).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        autor: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        id_alumnos: {
            type: DataTypes.BIGINT(11).UNSIGNED,
            references: {
                model: 'alumnos',
                key: 'id'
            }
        }
    };

    let config = {
        timestamps: false,
        underscored: false
    };

    const Libros = sequelize.define(alias, cols, config);

    Libros.associate = function (models) {
        Libros.belongsTo(models.alumnos, {
            as: "alumnos",
            foreignKey: "id_alumnos"
        });
    };

    return Libros;
};
