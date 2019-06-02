'use strict'
module.exports = (sequelize, DataTypes) => {
    var destinos = sequelize.define('destinos', {
        destino: DataTypes.STRING,
        precio: DataTypes.DECIMAL,
        descuento: DataTypes.DECIMAL,
        ruta_imagen: DataTypes.STRING,
        fecha_inicio: DataTypes.DATE,
        fecha_fin: DataTypes.DATE
    });
    return destinos;
};