const FaqsModel = require('../models/faqsModel');

// create new faq
exports.create = async (req, res) => {
    console.log(req.body)
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Body can not be empty' })
        }
        const faqs = new FaqsModel({
            question: req.body.question,
            answer: req.body.answer
        })

        const savedFaqs = await faqs.save();

        res.status(201).send(savedFaqs)
    } catch (error) {
        console.error("Error while creating new faq:", error)
        res.send(error)
    }
}

// get all faqs
exports.getAll = async (req, res) => {
    try {
        const allFaqs = await FaqsModel.find({});
        res.status(200).send(allFaqs)
    } catch (error) {
        console.error("Error while getting faq:", error)
        res.send(error)
    }
}

// edit faq
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const faq = await findFaqById(id);
        if (req.body.question) {
            faq.question = req.body.question;
        }
        if (req.body.answer) {
            faq.answer = req.body.answer;
        }
        const updatedFaq = await faq.save();
        res.send({ message: 'Updated faq', faq: updatedFaq })
    } catch (error) {
        console.error(error);
        res.send(error)
    }
}

// delete faq
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const faq = await findFaqById(id)
        const deletedFaq = await FaqsModel.deleteOne(faq);
        res.send({ message: 'Faq deleted:', deletedFaq })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const findFaqById = async (id) => {
    try {
        const faq = await FaqsModel.findById(id);
        if (!faq) {
            throw new Error('Product does not exist');
        }
        return faq;
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
