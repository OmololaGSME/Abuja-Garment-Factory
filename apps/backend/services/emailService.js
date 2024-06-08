const nodemailer = require("nodemailer");
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
})

const sendEmail = async (to, mailSubject, text, from) => {
    try {
        await transport.sendMail({
            from: from,
            to: to,
            subject: mailSubject,
            // html: html,
            text: text
        })
        console.log(`Email sent to ${to}`)
    } catch (error) {
        console.error(`Error sending email: ${error}`)
    }
}

module.exports = {
    sendEmail
}