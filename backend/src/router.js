const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.post("/users", userControllers.createUser);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);
router.put("/users/:id", userControllers.updateUser);
router.delete("/userinformation/:id", userControllers.deleteUser);
router.put("/isadmin/:id", userControllers.updateIsAdmin);
router.delete("/users/:id", userControllers.deleteUser);
router.post("/userinformation", userControllers.getUserInformation);

module.exports = router;
