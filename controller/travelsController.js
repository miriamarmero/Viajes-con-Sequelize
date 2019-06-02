const models = require('../models')

function getDestinos(){
    return models.travel.findAll()
}

function addDestino(destino){
    return models.travel.create(destino);
};

module.exports = {
    getDestinos,
    addDestino
}