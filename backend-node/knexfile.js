// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "db",
      user: "root",
      password: "testpass",
      database: "challenge_db"
    },
    migrations: {
      tableName: "migrations"
    }
  }
};
