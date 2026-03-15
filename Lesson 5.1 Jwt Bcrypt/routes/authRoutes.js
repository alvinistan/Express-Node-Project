const express = require("express");
const authController = require("../controller/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/profile", protect, authController.getProfile);
module.exports = router;
