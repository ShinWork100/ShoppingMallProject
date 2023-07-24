import React from 'react';
import Header from './MainPage/Header';
import Footer from './MainPage/Footer';
import Body from './MainPage/Body';
import SlideShowMain from './MainPage/SlideShow/SlideShowMain';
import Root from './CommonStyles/MyStyles';

const App = () => {
  return (
    <Root>
      <Header/>
      <SlideShowMain/>
      <Body/>
      <Footer/>
    </Root>
  );
};

export default App;
