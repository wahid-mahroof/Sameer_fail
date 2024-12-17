const express = require("express");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

// MongoDB Product Schema
const productSchema = new mongoose.Schema({
  image: String,
});
const Product = mongoose.model("Product", productSchema);

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// API to upload image
app.post("/api/products", upload.single("image"), (req, res) => {
  const imagePath = `/uploads/${req.file.filename}`;

  const newProduct = new Product({
    image: imagePath,
  });

  newProduct
    .save()
    .then(() => res.status(200).json(newProduct))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// API to get all products
app.get("/api/products", (req, res) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// API to delete a product
app.delete("/api/products/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
