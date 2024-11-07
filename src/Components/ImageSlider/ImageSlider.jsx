import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
const API = "https://picsum.photos/v2/list?page=1&limit=5";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error("Failed to Fetch Images");
        }
        const result = await response.json();
        console.log(result);
        setImages(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  const nextImageHandler = (id) => {
    let updatedId = +id + 1;
    if (id == images.length - 1) updatedId = 0;
    setCurrentImage(updatedId);
  };

  const prevImageHandler = (id) => {
    console.log(id);
    let updatedId = id - 1;
    if (id == 0) updatedId = images.length - 1;
    setCurrentImage(updatedId);
  };

  return (
    <div className="imageSlider">
      {loading && <p>Pleaes wait!</p>}
      {images.map(
        (item) =>
          currentImage == item.id && (
            <React.Fragment key={item.id}>
              <button type="button" onClick={() => prevImageHandler(item.id)}>
                prev
              </button>
              <img
                src={item.download_url}
                alt={item.author}
                width={400}
                height={300}
              />
              <button type="button" onClick={() => nextImageHandler(item.id)}>
                next
              </button>
            </React.Fragment>
          )
      )}
    </div>
  );
};

export default ImageSlider;
