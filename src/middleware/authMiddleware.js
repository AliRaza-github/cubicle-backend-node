// 
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWTSECRET;

const verifyToken = async (req, res, next) => {
    // Extract token from different sources
    let token = req.body.token || req.query.token || req.headers["authorization"];

    // If the token starts with 'Bearer ', remove it
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7); 
    }

   
    
    // If token is still empty or undefined
    if (!token) {
        return res.status(403).json({
            error: null,
            data: null,
            message: "Token is required."
        });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user;       
        next(); 
    } catch (error) {
        return res.status(500).json({
            error: error.message || error,
            data: null,
            message: "Invalid token."
        });
    }
};

module.exports = verifyToken;
