const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clinic_pro"
});

db.connect(() => console.log("DB Connected"));

module.exports = db;