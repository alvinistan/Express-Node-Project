const authService = require("../services/authService");

const registerUser = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);
    console.log(user);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await authService.loginUser(req.body.email, req.body.password);
    res.status(200).json({
      message: "Login Successful",
      token: user.token,
      userList: {
        _id: user.user._id,
        firstName: user.user.firstName,
        lastName: user.user.lastName,
        email: user.user.email,
        role: user.user.role,
        createdAt: user.user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Profile fetched successfully",
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};
