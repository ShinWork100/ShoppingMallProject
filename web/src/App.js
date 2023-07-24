import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import from 'react-router-dom'
import Header from './MainPage/Header';
import Footer from './MainPage/Footer';
import Body from './MainPage/Body';
import SlideShowMain from './MainPage/SlideShow/SlideShowMain';
import Root from './CommonStyles/MyStyles';
import ProductSlide from './MainPage/SlideShow/ProductSlide';

const App = () => {
  return (
    <Router>
      <Root>
        <Header />
        <Routes>
          <Route path="/home" element={<Body />} />
          <Route path="/slide" element={<SlideShowMain />} />
          <Route path="/product" element={<ProductSlide/>} />
        </Routes>
        <Footer />
      </Root>
    </Router>
  );
};

export default App;
