let nodeMailer = require('nodemailer')
let email = {}


email.transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user:'norma.armero@gmail.com',
        pass:'2MSPcjwx'
    },
    tls: {rejectUnauthorized: false},
},
{
    from: 'empresa.general@gmail.com',
    headers: {
    }
});
module.exports = email;
