

const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
       return next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) { console.log(' no token');
            return res.status(401).json({message: 'Auth error'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {console.log(e);
        return res.status(401).json({message: 'Auth error'})
    }
}
