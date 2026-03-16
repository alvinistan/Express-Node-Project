const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

router.get("/", protect, authorizeRoles("admin"), userController.getUsers);
router.delete("/:id", protect, authorizeRoles("admin"), userController.deleteUser);

module.exports = router;