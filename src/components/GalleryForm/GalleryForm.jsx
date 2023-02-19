import { useState } from "react";
import React from "react";
import { Button } from "@material-ui/core";

import "./GalleryForm.css";

function GalleryForm({ addImage }) {
  let [newImagePath, setNewImagePath] = useState("");
  let [newImageDescription, setNewImageDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if fields are filled before sending post request
    if (newImagePath && newImageDescription) {
      addImage(
        { path: newImagePath, description: newImageDescription },
        clearInputs
      );
    } else {
      // if either field is empty, display an alert
      alert("Oops! Fill out all fields to add an image.");
    }
  };

  const clearInputs = () => {
    // clear inputs
    setNewImagePath("");
    setNewImageDescription("");
  };

  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image-input">Image Path:</label>
        <input
          type="text"
          value={newImagePath}
          onChange={(evt) => setNewImagePath(evt.target.value)}
        ></input>
        <label htmlFor="description-input">Description:</label>
        <input
          type="text"
          value={newImageDescription}
          onChange={(evt) => setNewImageDescription(evt.target.value)}
        ></input>
        <Button color="primary" type="submit">
          Add Image
        </Button>
      </form>
    </div>
  );
}

export default GalleryForm;
