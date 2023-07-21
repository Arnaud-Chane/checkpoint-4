const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  addUser(users) {
    return this.database.query(
      `insert into ${this.table} ( email, password, is_admin ) values (?, ?, ?)`,
      [users.email, users.hashedPassword, users.is_admin]
    );
  }

  updateUser(users) {
    return this.database.query(
      `UPDATE ${this.table} SET email = ? WHERE user_id = ?`,
      [users.email]
    );
  }

  updateAdmin(users) {
    return this.database.query(
      `update ${this.table} set is_admin = ? where user_id = ?`,
      [users.is_admin, users.user_id]
    );
  }

  findUserByEmail(users) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      users.email,
    ]);
  }
}

module.exports = UserManager;
