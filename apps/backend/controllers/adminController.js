const AdminModel = require('../models/adminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config({ path: '.env' })

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
            return res.status(404).send({ message: 'Admin not found' })
        }
        const isPasswordMatch = await bcrypt.compare(password, admin.password);
        if (!isPasswordMatch) {
            return res.status(401).send({ message: 'Incorrect details' })
        }
        const accessToken = jwt.sign({ username: admin.username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
        const refreshToken = jwt.sign({ username: admin.username }, process.env.REFRESH_SECRET, { expiresIn: process.env.REFRESH_EXPIRY });

        admin.refreshToken = refreshToken;
        await admin.save();

        return res.status(201).send({
            message: 'Login successful',
            accessToken,
            refreshToken
        });
    } catch (error) {
        res.json(error)
    }
}

exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(403).send({ message: 'Refresh token is required' });
    }

    try {
        const admin = await AdminModel.findOne({ refreshToken: refreshToken });
        if (!admin) {
            return res.status(403).send({ message: 'Invalid refresh token' });
        }

        jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
            if (err) {
                return res.status(403).send({ message: 'Invalid refresh token' });
            }

            const accessToken = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '20m' });
            res.status(201).send({
                accessToken
            });
        });
    } catch (error) {
        res.status(500).send({ message: 'Error refreshing token', error });
    }
};

exports.logout = async (req, res) => {
    const { token } = req.body;

    try {
        const admin = await AdminModel.findOne({ refreshToken: token });
        if (!admin) {
            return res.status(403).send({ message: 'Invalid refresh token' });
        }

        admin.refreshToken = null;
        await admin.save();

        res.status(200).send({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).send({ message: 'Error logging out', error });
    }
};