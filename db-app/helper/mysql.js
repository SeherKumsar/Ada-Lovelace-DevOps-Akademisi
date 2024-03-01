const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100, // 100 tane bağlantı oluşturabilir
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "example_app",
});

module.exports = connection;
