const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const Admin = require("./models/admin");
const Photo = require("./models/photo");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"], // Frontend origin
    credentials: true,
  })
);
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://wahidmahroof:wahid@cluster0.eipft.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// JWT Secret
const JWT_SECRET = "your_secret_key";

// Multer Setup for Photo Uploads
const upload = multer({ dest: "uploads/" });

// Models
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const Admin = mongoose.model("Admin", adminSchema);

const photoSchema = new mongoose.Schema({
  filename: String,
  path: String,
});
const Photo = mongoose.model("Photo", photoSchema);

// Admin Login Endpoint
app.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (admin && bcrypt.compareSync(password, admin.password)) {
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Photo Upload Endpoint (Protected)
app.post("/api/admin/upload", upload.single("image"), (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res
      .status(403)
      .json({ success: false, message: "No token provided" });

  jwt.verify(token, JWT_SECRET, async (err) => {
    if (err)
      return res.status(403).json({ success: false, message: "Invalid token" });

    const newPhoto = new Photo({
      filename: req.file.filename,
      path: req.file.path,
    });
    await newPhoto.save();
    res.json({ success: true, message: "Photo uploaded successfully" });
  });
});

// Fetch Photos Endpoint
app.get("/api/photos", async (req, res) => {
  const photos = await Photo.find();
  res.json({ success: true, photos });
});

// Start Server
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
