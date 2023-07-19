const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  addUser(user) {
    return this.database.query(
      `insert into ${this.table} ( email, password, is_admin ) values (?, ?, ?)`,
      [user.email, user.password, user.is_admin]
    );
  }

  updateUser(user) {
    return this.database.query(
      `UPDATE ${this.table} SET email = ? WHERE user_id = ?`,
      [user.email]
    );
  }

  updateAdmin(user) {
    return this.database.query(
      `update ${this.table} set is_admin = ? where user_id = ?`,
      [user.is_admin, user.user_id]
    );
  }

  findUserByEmail(user) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      user.email,
    ]);
  }
}

module.exports = UserManager;
