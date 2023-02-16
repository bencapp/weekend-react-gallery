import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
