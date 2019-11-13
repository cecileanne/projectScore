require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD_DB,
    database: "gamesDB",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
