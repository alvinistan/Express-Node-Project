const express = require('express');

const router = express.Router();
// Define routes for user-related operations
router.get('/users', (req, res) => {
    res.send('Get all users');
});

router.post('/users', (req, res) => {
    res.send('Create a new user');
})

module.exports = router;