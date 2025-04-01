import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change this if needed
  password: "Rupam123@", // Change this if needed
  database: "contact_db",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Failed: ", err);
    return;
  }
  console.log("✅ MySQL Connected Successfully!");
});

// Route to save contact form data
app.post("/api/contact", (req, res) => {
  const { name, email, phone } = req.body;
  const sql = "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)";

  db.query(sql, [name, email, phone], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Form submitted successfully!" });
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// import mysql from "mysql2";

// // 1: To connect to MySQL server
// const db = await mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Rupam123@",
//   // database: "",
// });

// console.log("MySQL Connected Successfully :)");

// db.query("SHOW DATABASES", (err, results) => {
//   if (err) {
//     console.error("Error fetching databases:", err);
//     return;
//   }
//   console.log("Available Databases:", results);
// });
// // 2: Create a database (DB)
// // 3: Create a table
// // 4: Perform CRUD operations
