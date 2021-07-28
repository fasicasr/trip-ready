import React from "react";
import Imgix from "react-imgix";

const images = [
  "forest1",
  "forest2",
  "forest3",
  "mountain1",
  "mountain2",
  "mountain3",
  "river1",
  "river2",
];

const buildURL = (imagePath) =>
  `https://assets.imgix.net/tutorials/${imagePath}.webp`;

export const Gallery = () => (
  <div className="gallery">
    {images.map((image) => (
      <Imgix
        sizes="(min-width: 960px) 10vw, (min-width: 640px) 50vw, 50vw"
        src={buildURL(image)}
        key={image}
        imgixParams={{
          fit: "crop",
          fm: "jpg",
        }}
        width="100%"
        height="80px"
        border="center"
      />
    ))}
  </div>
);

export default Gallery;
