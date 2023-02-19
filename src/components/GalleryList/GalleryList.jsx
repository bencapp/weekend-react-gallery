import GalleryItem from "../GalleryItem/GalleryItem";
import React from "react";
import { Grid } from "@material-ui/core";

function GalleryList({ galleryList, updateLikes, deleteImage }) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {galleryList.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          updateLikes={updateLikes}
          deleteImage={deleteImage}
        />
      ))}
    </Grid>
  );
}

export default GalleryList;
