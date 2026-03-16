const User = require("../models/userModels");

const getAllUsers = async () => {
  return await User.find().select("-password");
};

const deleteUserById = async (userId) => {
  const user = await User.FindById(userId);

  if (!user) {
    throw new Error("User Not Found");
  }

  await User.findByIdAndDelete(userId);
  return User;
};

module.exports = {
  getAllUsers,
  deleteUserById,
};
