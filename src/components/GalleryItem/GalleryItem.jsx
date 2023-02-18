import { useState, useEffect } from "react";

import "./GalleryItem.css";

function GalleryItem({ item, updateLikes, deleteImage }) {
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
        }}
      >
        {descriptionVisible ? (
          <p>{item.description}</p>
        ) : (
          <img src={item.path} alt={item.description} />
        )}
      </div>
      <button onClick={() => updateLikes(item.id, item.likes)}>Love It!</button>
      <button onClick={() => deleteImage(item)}>Delete</button>
      <p>{item.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
