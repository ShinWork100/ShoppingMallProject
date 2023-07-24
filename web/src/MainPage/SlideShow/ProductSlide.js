import SlideShow from "./SlideShow";
import React from 'react';
import { styled } from 'styled-components'; // Import createGlobalStyle

const Root = styled('div')({
    display: 'flex',
})

const ProductSlide = () => {
    const images1 = [
        'https://picsum.photos/800/600',
        'https://picsum.photos/800/600?random=100',
        'https://picsum.photos/800/600?random=200',
        'https://picsum.photos/800/600?random=300',
        // Add more image URLs as needed
      ];
      const images2 = [
        'https://picsum.photos/800/600?random=411',
        'https://picsum.photos/800/600?random=511',
        'https://picsum.photos/800/600?random=611',
        'https://picsum.photos/800/600?random=711',
        // Add more image URLs as needed
      ];
      const images3 = [
        'https://picsum.photos/800/600?random=186',
        'https://picsum.photos/800/600?random=296',
        'https://picsum.photos/800/600?random=136',
        'https://picsum.photos/800/600?random=176',
        // Add more image URLs as needed
      ];
    return(
    <Root>
        <SlideShow images={images1}/>
        <SlideShow images={images2}/>
        <SlideShow images={images3}/>
    </Root>
    )
}

export default ProductSlide;