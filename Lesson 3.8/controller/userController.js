const getUser = (req,res,next) => {
    const user = [
        {
            name: 'Leenas',
            age: 25
        }
    ]
}

const validateUser = (req, res, next) => {
    const {name ,age} = req.body;

    if(!name || !age) {
        return res.status(400).json({
            message : "Name and age are required"
        });
    }
    next();
}

const logger = (req, res, next) => {
   console.log(`Request Received at ${new Date() .toISOString()}`)
    next();
}

module.exports = {
    getUser,
    validateUser,
    logger
}