import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import from 'react-router-dom'
import Header from "./MainPage/Header";
import Footer from "./MainPage/Footer";
import Body from "./MainPage/Body";
import SlideShowMain from "./MainPage/SlideShow/SlideShowMain";
import { Root } from "./CommonStyles/MyStyles";
import ProductSlide from "./MainPage/SlideShow/ProductSlide";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Information from "./MainPage/Information/Information";
// Creating the theme object
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Root>
            <Routes>
              <Route path="/" />
              <Route path="/home" element={<Body />} />
              <Route path="/slide" element={<SlideShowMain />} />
              <Route path="/product/:productId" element={<ProductSlide />} />
              <Route path="/Information" element={<Information />} />
            </Routes>
            <Footer />
          </Root>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
