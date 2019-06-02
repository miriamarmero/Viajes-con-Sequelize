'use strict'
module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        rol:DataTypes.BOOLEAN
    });
    return users;
};