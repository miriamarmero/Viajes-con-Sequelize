var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if(!email || !password){
    req.flash('errores', 'Falta usuario o contraseña');
    res.redirect('/users/login')
  }else{
    let user = await usersController.checkLogin(email, password);

    if(user){
    req.session.email = user.email;
    req.session.name = user.name;
    req.session.userId = user.id;
    req.session.rol = user.rol;
    req.session.logginDate = new Date();
    res.redirect('/destinos');
    }else{
      req.flash('errores', 'Usuario o contraseña no válidos');
      res.redirect('/users/login');
    }
  }
});

router.get('/login', (req, res) => {
  let errores = req.flash('errores');
  if(req.session.email){
    res.redirect('/destinos');
  }else{
    res.render('user/login', {
      errores
    });
  };
});

router.get('/register', (req, res) => {
  let errores = req.flash('errores', 'No es posible registrarse');
  res.render('user/register', {
    errores
  });
});

router.post('/register', async (req, res) => {
  let {email, name, password} = req.body;

  let isRegistered = await usersController.register(email, password, name);

  if(isRegistered){
    req.flash('mensajeRegistro', 'Enhorabuena! Te has registrado correctamente');
    res.redirect('/users/login');
  }else{
    req.flash('errores', 'No se pudo registrar correctamente')
    res.redirect('/register');
  }
});

router.get('/destroy', async (req, res) => {
  req.flash('mensajeRegistro', 'Has salido correctamente')
  req.session.destroy();
  res.redirect('/destinos');
})

module.exports = router;