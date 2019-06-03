const models = require('../models')
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

async function checkLogin(email, password){
    let users = await models.users.findAll({
        where: {email: email}
    });

    if(users.length === 0){
        return(null)
    }else{
        let match = await bcrypt.compare(password,users[0].password);
        return(match ? users[0] : null);
    };
};

async function register(email, password, name){
    let hash = await bcrypt.hash(password, SALT_ROUNDS);
    let user = {
        password: hash,
        email,
        name,
    };
    return models.users.create(user);
};

module.exports = {
    checkLogin,
    register
};