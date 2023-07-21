const express = require("express");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");
const userControllers = require("./controllers/userControllers");

router.post("/users", hashPassword, userControllers.createUser);
router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);
router.post("/users", hashPassword, userControllers.createUser);
router.put("/users/:id", userControllers.updateUser);
router.delete("/user-information/:id", userControllers.deleteUser);
router.put("/is-admin/:id", userControllers.updateIsAdmin);
router.delete("/users/:id", userControllers.deleteUser);
router.post(
  "/user-information",
  verifyToken,
  userControllers.getUserInformation
);

module.exports = router;
