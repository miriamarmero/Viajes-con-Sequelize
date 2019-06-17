var express = require('express');
var router = express.Router();

const Hbs = require('nodemailer-express-handlebars');
const Path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  let error= req.flash('permisos');
  res.render('index', { title: 'Express', error});
});

const Email = require('../config/emailConf');
Email.transporter.use('compile', Hbs({
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'views/email-templates/partial',
    layoutsDir: 'views/email-templates/layout',
    defaultLayout: 'email.body.hbs',
  },
  extName: '.hbs',
  viewPath: Path.join(__dirname, '../views/email-templates')
}));

let message = {
  to: 'norma.armero@gmail.com',
  subject: 'EMAIL DE VERIFICACIÓN',
  template: 'email',
  context: {
    texto: '¡ENHORABUENA! Te has registrado corretamente, ahora solo falta que nos verifiques tu cuenta'
  }
  /* attachments: [
    {
      filename: 'textl.txt',
      content: 'Hello World!'
    }
  ] */
};

Email.transporter.sendMail(message)

module.exports = router;
