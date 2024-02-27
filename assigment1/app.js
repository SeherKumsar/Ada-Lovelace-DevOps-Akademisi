"use strict"; // require edilen yerde require varsa kullanılır
const express = require("express");
const dbConnection = require("./helper/mysql");

const app = express();

app.get("/students", (req, res) => {
  dbConnection.query("SELECT * FROM students", (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});

app.get("/students/:id", (req, res) => {
  dbConnection.query("SELECT * FROM students WHERE id = ?",
  [req.params.id], (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});