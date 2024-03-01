const mysql = require("mysql2");
const password = require("./password");

const connection = mysql.createPool({
  connectionLimit: 100, // 100 tane bağlantı oluşturabilir
  host: "localhost",
  user: "root",
  password: password, // Buraya MySQL şifrenizi ekleyin
  database: "example_app",
});

module.exports = connection;
