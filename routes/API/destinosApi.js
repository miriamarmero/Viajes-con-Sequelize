const express = require('express');
const router = express.Router();

const travelsController = require('../../controllers/travelsController');


// El post para crear un destino por json
router.get('/', async (req, res) => {
    let destinos = await travelsController.getDestinos();
    res.send(destinos);
});

router.post('/', async (req, res) => {
    let destino = await travelsController.addDestino(req.body);
    res.send(destino);
});

module.exports = router;