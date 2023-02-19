import { useState, useEffect } from "react";
import React from "react";
import { Button } from "@material-ui/core";

import "./GalleryItem.css";

function GalleryItem({ item, updateLikes, deleteImage }) {
  const [descriptionVisible, setDescriptionToggle] = useState([]);

  useEffect(() => {
    setDescriptionToggle(false);
  }, []);

  return (
    <div className="list-item-container">
      <div
        className="img-container"
        onClick={() => {
          setDescriptionToggle(!descriptionVisible);
        }}
      >
        {descriptionVisible ? (
          <p className="item-description">{item.description}</p>
        ) : (
          <img src={item.path} alt={item.description} />
        )}
      </div>
      <div>
        <Button
          size="small"
          color="success"
          onClick={() => updateLikes(item.id, item.likes)}
        >
          Love It!
        </Button>
        <Button size="small" onClick={() => deleteImage(item)}>
          Delete
        </Button>
      </div>
      <p>{item.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
