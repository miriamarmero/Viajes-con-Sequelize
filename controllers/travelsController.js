const models = require('../models')

function getDestinos(){
    return models.destinos.findAll().catch();
};

function addDestino(destino){
    return models.destinos.create(destino);
};

module.exports = {
    getDestinos,
    addDestino
}