const express = require("express");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");
const userControllers = require("./controllers/userControllers");
const taskControllers = require("./controllers/taskControllers");

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
router.put("/is-admin/:id", userControllers.updateIsAdmin);
router.delete("/users/:id", userControllers.deleteUser);
router.post(
  "/userinformation",
  verifyToken,
  userControllers.getUserInformation
);

router.get("/users/tasks/:id", taskControllers.getTaskByUserId);
router.get("/tasks", taskControllers.getAllTasks);
router.get("/tasks/:id", taskControllers.getTaskById);
router.post("/tasks", taskControllers.createTask);
router.put("/tasks/:id", taskControllers.updateTaskName);
router.put("/tasks/is-done/:id", taskControllers.updateTaskIfDone);
router.put("/tasks/is-archived/:id", taskControllers.updateTaskIfArchived);
router.delete("/tasks/:id", taskControllers.deleteTask);

module.exports = router;
