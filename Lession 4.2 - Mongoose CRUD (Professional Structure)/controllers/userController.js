const userServices = require("../services/userServices");

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const user = await userServices.createUser(req.body);
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Get all users// Get all users
const getUsers = async (req, res, next) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 5;
      const skip = (page - 1) * limit;
      const search = req.query.search || "";
      const degree = req.query.degree || "";
      const sort = req.query.sort || "createdAt";
  
      const filter = {};
  
      if (degree) {
        filter.degree = degree;
      }
  
      if (search) {
        filter.$or = [
          { firstName: { $regex: search, $options: "i" } },
          { lastName: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
        ];
      }
  
      const users = await userServices.getAllUsers(filter, sort, skip, limit);
      const totalUsers = await userServices.getUsersCount(filter);
  
      res.status(200).json({
        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit),
        totalUsers,
        users,
      });
    } catch (error) {
      next(error);
    }
  };

// Get a user by ID

const getUser = async (req, res, next) => {
  try {
    const user = await userServices.getUserById(req.params.id);
    res.status(200).json({
      message: "User retrieved successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Update a user by ID
const updateUser = async (req, res, next) => {
  try {
    const user = await userServices.updateUserById(req.params.id, req.body);
    res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a user by ID
const deleteUser = async (req, res, next) => {
  try {
    const user = await userServices.deleteUserById(req.params.id);
    res.status(200).json({
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
