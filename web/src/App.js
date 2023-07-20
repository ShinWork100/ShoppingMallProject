import React from 'react';
import { styled } from '@mui/system';
import MenuApi from './Menu/MenuApi';

const Header = styled('header')({
  backgroundColor: '#000',
  color: '#fff',
  padding: '1rem',
});

const Logo = styled('div')({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const Nav = styled('nav')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 0',
});

const NavItem = styled('a')({
  color: '#fff',
  marginLeft: '1.5rem',
  textDecoration: 'none',
});

const HeroSection = styled('section')({
  backgroundColor: '#f9f9f9',
  padding: '2rem',
  textAlign: 'center',
});

const HeroTitle = styled('h1')({
  fontSize: '3rem',
  marginBottom: '1rem',
});

const HeroSubtitle = styled('p')({
  fontSize: '1.5rem',
  marginBottom: '2rem',
});

const CallToAction = styled('a')({
  backgroundColor: '#000',
  color: '#fff',
  padding: '1rem 2rem',
  borderRadius: '0.25rem',
  textDecoration: 'none',
});

const Footer = styled('footer')({
  backgroundColor: '#000',
  color: '#fff',
  padding: '2rem',
  textAlign: 'center',
});

const App = () => {

  return (
    <>
    <MenuApi></MenuApi>
      <Header>
        <div className="container">
          <Nav>
            <Logo>My Website</Logo>
            <div>
              <NavItem href="#">Home</NavItem>
              <NavItem href="#">Products</NavItem>
              <NavItem href="#">Services</NavItem>
              <NavItem href="#">Contact</NavItem>
            </div>
          </Nav>
        </div>
      </Header>

      <HeroSection>
        <div className="container">
          <HeroTitle>Welcome to My Website</HeroTitle>
          <HeroSubtitle>Discover the best products and services.</HeroSubtitle>
          <CallToAction href="#">Get Started</CallToAction>
        </div>
      </HeroSection>

      <Footer>
        <div className="container">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </Footer>
    </>
  );
};

export default App;
