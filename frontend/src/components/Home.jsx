import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import front2 from "../../assets/front2.jpg"; // Example existing image

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showLogin, setShowLogin] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  // Fetch products from API
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [uploadedImage]);

  // Handle Admin Login
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/login",
        credentials
      );
      if (response.data.success) {
        setIsAdmin(true);
        setShowLogin(false);
      } else {
        console.error("Login failed:", response.data.message);
        alert("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      alert("Login failed. Please try again.");
    }
  };

  // Handle File Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://localhost:8080/api/products", formData)
      .then((response) => {
        setUploadedImage(response.data.image);
        setProducts((prev) => [...prev, response.data]);
      })
      .catch((err) => {
        console.error(
          "Error uploading image:",
          err.response ? err.response.data : err.message
        );
        alert("Failed to upload image. Please try again.");
      });
  };

  // Handle Delete Product
  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8080/api/products/${id}`)
      .then(() => {
        setProducts((prev) => prev.filter((product) => product._id !== id));
      })
      .catch((err) => {
        console.error(
          "Error deleting product:",
          err.response ? err.response.data : err.message
        );
        alert("Failed to delete product. Please try again.");
      });
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-teal-300 to-blue-300 min-h-screen text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Admin Login Button */}
        {!isAdmin && (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-500 px-4 py-2 text-white rounded mb-8"
          >
            Admin Login
          </button>
        )}

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded shadow-lg transform transition duration-500 scale-90">
              <h2 className="text-2xl mb-4">Admin Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                className="block w-full mb-4 border border-gray-300 p-2 text-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="block w-full mb-4 border border-gray-300 p-2 text-gray-400"
              />
              <button
                onClick={handleLogin}
                className="bg-green-500 px-4 py-2 text-white rounded"
              >
                Login
              </button>
            </div>
          </div>
        )}

        {/* File Upload (Admin Only) */}
        {isAdmin && (
          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Upload New Product</h2>
            <input type="file" onChange={handleFileUpload} />
          </div>
        )}

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-serif text-gray-600">
              Welcome to Family Corner
            </h1>
            <p className="text-lg sm:text-xl mt-6 font-sans text-slate-900">
              Discover fashion and home essentials for your family under one
              roof.
            </p>
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-500 hover:to-green-500 border-2 border-transparent rounded-full px-8 py-3 text-white font-semibold text-lg hover:scale-105 transition duration-300 ease-in-out font-serif"
            >
              Style And Serve:
            </motion.button>
          </div>

          {/* Hero Image Section */}
          <div className="relative">
            <img
              src={
                uploadedImage ? `http://localhost:8080${uploadedImage}` : front2
              }
              alt="Family Corner"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Product Grid Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8 font-serif uppercase underline">
            Our Featured Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <motion.div
                key={product._id}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              >
                <img
                  src={product.image}
                  alt={`Product ${product._id}`}
                  className="w-full h-64 object-cover"
                />
                {isAdmin && (
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full m-2"
                  >
                    Delete
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
