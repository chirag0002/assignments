const {User} = require('../db/index');

async function userMiddleware(req, res, next) {
    const { username } = req.headers;

    try{
        const user = await User.findOne({ username: username });
        if (!user) {
            res.status(401).json({ message: 'Unauthorized' });
            return null;
        }
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = userMiddleware;