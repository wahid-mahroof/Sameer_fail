import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/upload",
        formData
      );
      if (response.data.success) {
        fetchImages();
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/images");
      if (response.data.success) {
        setImages(response.data.images);
      }
    } catch (error) {
      console.error("Fetch images error:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <input type="file" onChange={handleFileUpload} className="mb-4" />
      <div className="grid grid-cols-3 gap-4 mt-8">
        {images.map((img) => (
          <motion.div
            key={img._id}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={`http://localhost:8080/uploads/${img.filename}`}
              alt={img.filename}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
