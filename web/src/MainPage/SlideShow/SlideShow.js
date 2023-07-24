import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components'; // Import createGlobalStyle

const SlideShowContainer = styled.div`
max-width: 800px; /* Set the maximum width to limit the slideshow size */
min-height: 250px;
display: flex; /* Use flexbox to allow the container to take up the available space */
// align-items: center; /* Center the image vertically */
justify-content: center; /* Center the image horizontally */
flex-wrap: wrap; /* Wrap the images to a new row when there isn't enough width */
`;

const SlideShowImage = styled.img`
flex-basis: 20%; /* Initial size of the images */
max-width: 100%;
min-height: 30%;
max-height: 600px; /* Set the maximum height for the images */
object-fit: contain; /* Preserve the aspect ratio of the images */
flex: 1; /* Make the images take up equal space when wrapped to a new row */
`;

const SlideShow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [images.length]);

  return (
    <SlideShowContainer>
        <SlideShowImage
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
        />
    </SlideShowContainer>
  );
};

export default SlideShow;
