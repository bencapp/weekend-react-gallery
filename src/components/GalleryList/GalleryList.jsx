import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, updateLikes }) {
  return (
    <div>
      {galleryList.map((item) => (
        <GalleryItem key={item.id} item={item} updateLikes={updateLikes}/>
      ))}
    </div>
  );
}

export default GalleryList;
