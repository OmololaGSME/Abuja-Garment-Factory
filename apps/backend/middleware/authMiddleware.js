const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' })

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization
    console.log("Header: ",header)

    if(header) {
        const token = header.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) {
                return res.status(403)
            }
            
            req.user = user
            next()
        })
    }
}

module.exports = verifyToken