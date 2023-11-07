import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components"; // Import createGlobalStyle
import SlideShow from "./SlideShow";

const Root = styled("div")({
  display: "flex",
});

const ProductSlide = () => {
  const { productId } = useParams(); // Get the 'productId' from the URL

  // Define sets of images for different products
  const imagesByProductId = {
    1: [
      "https://picsum.photos/800/600",
      "https://picsum.photos/800/600?random=100",
      "https://picsum.photos/800/600?random=200",
      "https://picsum.photos/800/600?random=300",
      // Add more image URLs as needed
    ],
    2: [
      "https://picsum.photos/800/600?random=411",
      "https://picsum.photos/800/600?random=511",
      "https://picsum.photos/800/600?random=611",
      "https://picsum.photos/800/600?random=711",
      // Add more image URLs as needed
    ],
    3: [
      "https://picsum.photos/800/600?random=186",
      "https://picsum.photos/800/600?random=296",
      "https://picsum.photos/800/600?random=136",
      "https://picsum.photos/800/600?random=176",
      // Add more image URLs as needed
    ],
  };

  // Check if the 'productId' exists in the 'imagesByProductId' object
  const images = imagesByProductId[productId] || [];
  console.log(productId);
  return (
    <Root>
      <SlideShow images={images} />
    </Root>
  );
};

export default ProductSlide;
