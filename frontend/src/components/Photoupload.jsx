// import React, { useState } from "react";
// import axios from "axios";

// const PhotoUpload = ({ token }) => {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/admin/upload",
//         formData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setMessage("Photo uploaded successfully");
//     } catch (error) {
//       setMessage("Error uploading photo");
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Photo</h2>
//       <form onSubmit={handleUpload}>
//         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//         <button type="submit">Upload</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default PhotoUpload;
