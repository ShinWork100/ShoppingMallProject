import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import from 'react-router-dom'
// import Header from './MainPage/Header';
import Footer from './MainPage/Footer';
import Body from './MainPage/Body';
import SlideShowMain from './MainPage/SlideShow/SlideShowMain';
import Root from './CommonStyles/MyStyles';
import ProductSlide from './MainPage/SlideShow/ProductSlide';
import Layout from './Menu/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Creating the theme object
const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
  zIndex: {
    modal: 1300,
    appBar: 1200,
    drawer: 1100,
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Root>
        <Layout />
\        <Routes>
          <Route path="/"/>
          <Route path="/home" element={<Body />} />
          <Route path="/slide" element={<SlideShowMain />} />
          <Route path="/product" element={<ProductSlide/>} />
        </Routes>
        <Footer />
      </Root>
    </Router>
    </ThemeProvider>
  );
};

export default App;
