// ImageDescription.js
import React from 'react';

const ImageDescription = ({ image }) => {
  return (
    <div>
      <h2>Image Description</h2>
      <img src={image} alt="Image Description" />
      {'add other image description content here'}
    </div>
  );
};

export default ImageDescription;
