const AbstractManager = require("./AbstractManager");

class TaskManager extends AbstractManager {
  constructor() {
    super({ table: "task" });
  }

  addTask(tasks) {
    return this.database.query(
      `insert into ${this.table} ( name ) values (?)`,
      [tasks.name]
    );
  }

  updateTaskName(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE task_id = ?`,
      [tasks.name]
    );
  }

  updateTaskIfDone(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET task_done = ? WHERE task_id = ?`,
      [tasks.task_done]
    );
  }

  updateTaskIfArchived(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET task_archived = ? WHERE task_id = ?`,
      [tasks.task_archived]
    );
  }
}

module.exports = TaskManager;
