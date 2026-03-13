const userServices = require('../services/userServices');

// Create a new user
const createUser = async (req, res, next) => {
    try {
        const user = await userServices.createUser(req.body);
        res.status(201).json({
            message: "User created successfully",
            user
        });
    } catch (error) {
        next(error);
        
    }
};

// Get all users
const getUsers = async (req, res, next) => {
    try {
        const users =await userServices.getAllUsers();
        res.status(200).json({
            message: "Users retrieved successfully",
            users
        });
    } catch (error) {
        next(error);
    }
}

// Get a user by ID

const getUser = async (req, res,next) => {
    try {
        const user = await userServices.getUserById(req.params.id);
        res.status(200).json({
            message: "User retrieved successfully",
            user
        });
    } catch (error) {
        next(error);
        
    }
}

// Update a user by ID
const updateUser = async (req, res, next) => {
    try {
        const user = await userServices.updateUserById(req.params.id, req.body);
        res.status(200).json({
            message: "User updated successfully",
            user
        });
    } catch (error) {
        next(error);
        
    }
}

// Delete a user by ID
const deleteUser = async (req, res, next) => {
    try {
        const user = await userServices.deleteUserById(req.params.id);
        res.status(200).json({
            message: "User deleted successfully",
            user
        });
    } catch (error) {
        next(error);
        
    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}