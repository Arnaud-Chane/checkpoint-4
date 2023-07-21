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

  updateTask(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE task_id = ?`,
      [tasks.name]
    );
  }
}

module.exports = TaskManager;
