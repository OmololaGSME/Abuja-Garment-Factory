const PopUpModel = require('../models/popUpModel');
const { sendMail, sendEmail } = require('../services/emailService')

//create new 
exports.create = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: "Body can not be empty" })
        }
        const { email, subject, message } = req.body;

        const mailSubject = "Response Mail";
        const text = 'Response Mail';
        const from = "abujagarmentfactory@email.com"

        await sendEmail(email, mailSubject, text, from)

        const popUpDetails = new PopUpModel({
            email: email,
            subject: subject,
            message: message
        })
        await popUpDetails.save()
        res.status(200).send({ message: "Email sent and popup saved successfully" });
    } catch (error) {
        console.error("Error:", error)
        res.send(error)
    }
}

//send mail to user

exports.sendMailToUser = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).send({ message: "Body can not be empty" })
        }

        const mailSubject = "Response Mail";
        const from = "abujagarmentfactory@email.com"

        const { email, message } = req.body;
        await sendEmail(email, mailSubject, message, from)
    } catch (error) {
        
    }
}