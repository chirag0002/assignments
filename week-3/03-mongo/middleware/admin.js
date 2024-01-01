const {Admin} = require('../db/index');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const { username } = req.headers;

    try{
        const admin = await Admin.findOne({ username: username});
        if (!admin) {
            res.status(401).json({ message: 'Unauthorized' });
            return null;
        }
        req.admin = admin;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = adminMiddleware;