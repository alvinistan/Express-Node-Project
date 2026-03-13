const User = require('../models/userModel');

// Create a new user
const createUser = async (userData) => {
    return await User.create(userData);
};

// Get all users
const getAllUsers = async (filter, sort, skip, limit) => {
    return await User.find(filter)
    .sort({ [sort] : 1})
    .skip(skip)
    .limit(limit);
}
const getUsersCount = async (filter) => {
    return await User.countDocuments(filter);
  };

// Get a user by ID
const getUserById = async (userId) => {
    return await User.findById(userId);
};

// Update a user By ID
const updateUserById = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new: true})
}

// Delete a user by ID
const deleteUserById = async (userId) => {
    return await User.findOneAndDelete({_id: userId});
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    getUsersCount
}