import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "*", // Allow requests from your frontend
  methods: "GET,POST",
};

app.use(cors(corsOptions));

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
