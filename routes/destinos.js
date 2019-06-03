const express = require('express');
const travelsController = require('../controllers/travelsController');

const router = express.Router();

//Listado de viajes
router.get('/', async (req, res) => {
    let destinos = await travelsController.getDestinos();
    res.render('destinos', {
        destinos
    });
});

// Post que se llama desde el formulario
router.post('/', async (req, res) => {
    let result = await travelsController.addDestino(req.body.destino, req.body.precio, req.body.descuento, req.body.ruta_imagen, req.body.fecha_inicio, req.body.fecha_fin);
    res.render('destinos/added', {result});
})

router.get('/add', (req, res) => {
    res.render('destinos/add');
})

module.exports = router;