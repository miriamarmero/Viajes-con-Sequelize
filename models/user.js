'use strict'
module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        rol: DataTypes.ENUM('admin', 'user')
    },
    
    {uniqueKeys: {
        Items_unique: {
            fields: ['email']
        }
    }});

    
    return users;
};