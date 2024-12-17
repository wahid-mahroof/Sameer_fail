import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin } from "react-icons/fa"; // You can add other icons if needed

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-300 to-purple-400 text-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us:</h3>
            <p className="mt-2">Email: Sameerjatt@gmail.com</p>
            <p className="mt-2">Phone:7051576700</p>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-2xl text-white hover:text-gray-300"
              >
                <FaTwitter />
                <p className="text-sm text-gray-500">Sameerjatt12</p>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-2xl text-white hover:text-gray-300"
              >
                <FaLinkedin />
                <p className="text-sm text-gray-500">Sammerjatt</p>
              </motion.a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center sm:text-right">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="mt-4">
              &copy; 2025 Your Company. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-300">
          <p>
            Crafted with 💙 by <strong>Your Company</strong>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
