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
    if (req.session.rol == 'admin'){
        let result = await travelsController.addDestino(req.body.destino, req.body.precio, req.body.descuento, req.body.ruta_imagen, req.body.fecha_inicio, req.body.fecha_fin);
        res.render('destinos/added', {result});  
    }else{
        req.flash('permisos', 'No tienes permiso en esta area');
    }
    
})

router.get('/add', (req, res) => {
    if(req.session.rol == 'admin'){
        res.render('destinos/add');  
    }else{
        req.flash('permisos', 'No tienes permiso en esta area');
    }
    
});

module.exports = router;