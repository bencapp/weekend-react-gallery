import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";

import "./App.css";

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  // Client GET
  const getGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((err) => console.log("Error in client GET:", err));
  };

  // Client PUT for updating likes
  const updateLikes = (id, currentLikes) => {
    axios
      .put(`/gallery/like/${id}`, { currentLikes })
      .then(() => {
        getGallery();
      })
      .catch((err) => console.log("Error in client PUT:", err));
  };

  //Client POST for adding a new image
  const addImage = (image, callback) => {
    axios
      .post("/gallery", { path: image.path, description: image.description })
      .then(() => {
        getGallery();
        // callback function to clear the input fields after submit
        callback();
      })
      .catch((err) => console.log("Error in client POST:", err));
  };

  const deleteImage = (image) => {
    axios
      .delete(`/gallery/${image.id}`)
      .then(() => {
        getGallery();
      })
      .catch((err) => console.log("Error in client GET:", err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm addImage={addImage} />
      <GalleryList
        galleryList={galleryList}
        updateLikes={updateLikes}
        deleteImage={deleteImage}
      />
    </div>
  );
}

export default App;
