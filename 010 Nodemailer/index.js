const nodemailer = require('nodemailer');
require('dotenv').config();
const sentMail =()=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USERMAIL,
            pass :process.env.APP_PASSWORD
        }
    });

    transporter.sendMail({
        from :process.env.USERMAIL,
        to: 'malibhupender007@gmail.com',
        subject: 'aa gya finally',
        text :'necho'
    }, (error, success)=>{
        if(error) return console.log(error);
        console.log('email sent successfully')
    })
};

sentMail();