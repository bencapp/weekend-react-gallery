import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, updateLikes, deleteImage }) {
  return (
    <div>
      {galleryList.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          updateLikes={updateLikes}
          deleteImage={deleteImage}
        />
      ))}
    </div>
  );
}

export default GalleryList;
