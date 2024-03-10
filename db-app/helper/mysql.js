const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100, // 100 tane bağlantı oluşturabilir
  host: "mysql_db",
  user: "user",
  port: "3306",
  password: "password",
  database: "app",
});

module.exports = connection;
