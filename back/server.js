import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "OPTIONS"], // Allow OPTIONS method
  allowedHeaders: ["Content-Type"], // Allow content-type header
};

app.use(cors(corsOptions));

app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
