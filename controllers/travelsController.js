const models = require('../models')

function getDestinos(){
    return models.destinos.findAll().catch();
};

function addDestino(destino){
    return models.destinos.create(destino);
};

async function detail(id){
    let result = await models.destinos.findByPk(id)
    return result['dataValues']
}

async function mostrarDetail(req, res) {
    let detail = await models.destinos.detail(req.params.id)
    res.render('/detail', {
        detail
    })
}

async function editarDetail(req, res) {
    let detail = await models.destinos.detail(req.params.id)
    res.render('/editDetail', {
        detail
    })
}

module.exports = {
    getDestinos,
    addDestino,
    detail,
    mostrarDetail,
    editarDetail
}