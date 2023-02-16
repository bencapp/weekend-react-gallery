import { useState, useEffect } from "react";

import "./GalleryItem.css";

function GalleryItem({ item }) {
  const [descriptionVisible, setDescriptionToggle] = useState([]);

  useEffect(() => {
    setDescriptionToggle(false);
  }, []);

  return (
    <div>
      <div
        className="img-container"
        onClick={() => {
          setDescriptionToggle(!descriptionVisible);
          console.log("toggled description, it is now:", descriptionVisible);
        }}
      >
        {descriptionVisible ? (
          <p>{item.description}</p>
        ) : (
          <img src={item.path} alt={item.description} />
        )}
      </div>
      <button>Love It!</button>
      <p>{item.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
