const express = require('express');
const { getUser, validateUser, logger} = require('../controller/userController')
const router = express.Router();


router.post('/user', validateUser,logger, (req, res) => {
    const {name ,age} = req.body;

    res.json({
        message : "User created successfully",
        user : {
            name,
            age
        }
    })
})

module.exports = router;