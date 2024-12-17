import React, { useEffect, useState } from "react";
import axios from "axios";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get("http://localhost:8080/api/photos");
      setPhotos(response.data.photos);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <h2>Photo Gallery</h2>
      <div>
        {photos.map((photo) => (
          <img
            key={photo._id}
            src={`http://localhost:8080/${photo.path}`}
            alt={photo.filename}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
