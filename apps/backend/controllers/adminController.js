const AdminModel = require('../models/adminModel');
const bcrypt = require('bcrypt');

exports.seedAdmin = async (req, res) => {
    try {
        const AdminDetails = [
            {
                username: 'Admin1',
                password: 'Password1'
            },
            {
                username: 'Admin2',
                password: 'Password2'
            }
        ]
        for (const admin of AdminDetails) {
            const hashedPassword = await bcrypt.hash(admin.password, 10);
            const existingAdmin = await AdminModel.findOne({ username: admin.username });
            if (!existingAdmin) {
                await AdminModel.create({
                    username: admin.username,
                    password: hashedPassword
                });
            }
        }
        console.log('Admins seeded successfully');
    } catch (error) {
        res.status(500).send({ message: 'Error seeding admins', error });
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await AdminModel.findOne({ username: username })
        if (!admin) {
            res.status(404).send({ message: 'Admin not found' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const isPasswordMatch = await bcrypt.compare(hashedPassword, admin.password);
        if (!isPasswordMatch) {
            res.status(401).send({ message: 'Incorrect details' })
        }
        res.status(201).send({ message: 'Login successful', admin })
    } catch (error) {
        res.send(error)
    }
}