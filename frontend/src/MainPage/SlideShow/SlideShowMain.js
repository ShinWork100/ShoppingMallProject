import SlideShow from "./SlideShow";
import React from 'react';
import { styled } from 'styled-components'; // Import createGlobalStyle

const Root = styled('div')({
    display: 'flex',
})

const SlideShowMain = () => {
    const images1 = [
        'https://picsum.photos/800/600',
        'https://picsum.photos/800/600?random=1',
        'https://picsum.photos/800/600?random=2',
        'https://picsum.photos/800/600?random=3',
        // Add more image URLs as needed
      ];
      const images2 = [
        'https://picsum.photos/800/600?random=41',
        'https://picsum.photos/800/600?random=51',
        'https://picsum.photos/800/600?random=61',
        'https://picsum.photos/800/600?random=71',
        // Add more image URLs as needed
      ];
      const images3 = [
        'https://picsum.photos/800/600?random=18',
        'https://picsum.photos/800/600?random=29',
        'https://picsum.photos/800/600?random=13',
        'https://picsum.photos/800/600?random=17',
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

export default SlideShowMain;