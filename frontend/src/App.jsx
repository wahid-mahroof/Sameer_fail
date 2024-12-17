import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ImageUpload from "./components/ImageUpload";
// import PhotoUpload from "./components/Photoupload";
import PhotoGallery from "./components/PhotoGallery";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {showLogin && !isAdmin ? (
        <Login
          setIsAdmin={setIsAdmin}
          setShowLogin={setShowLogin}
          setMessage={setMessage}
        />
      ) : (
        <div>
          <Home />

          {!token ? (
            <AdminLogin setToken={setToken} />
          ) : (
            <ImageUpload token={token} />
          )}
          <PhotoGallery />
        </div>
      )}

      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
