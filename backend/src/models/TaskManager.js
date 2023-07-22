const AbstractManager = require("./AbstractManager");

class TaskManager extends AbstractManager {
  constructor() {
    super({ table: "task" });
  }

  addTask(tasks) {
    return this.database.query(
      `insert into ${this.table} ( user_id, name, task_done, task_archived ) values (?, ?, ?, ?)`,
      [tasks.user_id, tasks.name, tasks.task_done, tasks.task_archived]
    );
  }

  findTaskByUserId(userId) {
    return this.database.query(
      `select * from  ${this.table} where user_id = ?`,
      [userId]
    );
  }

  updateTaskName(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE task_id = ?`,
      [tasks.name, tasks.task_id]
    );
  }

  updateTaskIfDone(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET task_done = ? WHERE task_id = ?`,
      [tasks.task_done, tasks.task_id]
    );
  }

  updateTaskIfArchived(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET task_archived = ? WHERE task_id = ?`,
      [tasks.task_archived, tasks.task_id]
    );
  }
}

module.exports = TaskManager;
