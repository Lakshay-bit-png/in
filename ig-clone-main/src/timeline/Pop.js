import React from "react";
import "./Pop.css";
import { useEffect, useRef, useState } from "react";

function Pop() {
  const targetRef = useRef(null);

  const handleClick = (e) => {
    if (
      targetRef.current &&
      !targetRef.current.contains(e.target) &&
      document.querySelector(".fscreen").style.display == "none"
    ) {
      document.querySelector(".fscreen").style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // You can perform additional checks here on the file type, size, etc.

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fscreen" ref={targetRef}>
      <div className="small-popup">
        <div>
          <h2>Select an Image</h2>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {selectedImage && (
            <div>
              <h3>Preview:</h3>
              <img src={selectedImage} alt="Selected" width="200" />
            </div>
          )}
        </div>
        <input type='text' placeholder="Enter Caption " className="caption"/>
        <button className="Post">Post</button>
      </div>
    </div>
  );
}

export default Pop;
