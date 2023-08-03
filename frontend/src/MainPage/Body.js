import React from 'react';
import { styled } from 'styled-components';
import UserComponent from '../Menu/UserComponent';

const BodyWrapper = styled('section')({
  backgroundColor: '#f9f9f9',
  padding: '4rem 1rem', /* Increased padding at the top and bottom */
  textAlign: 'center',
  flexGrow: 1, // Allow the HeroSection to grow and fill the remaining space
  display: 'flex', // Use Flexbox to center items
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
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

const Body = () => {
  return (
    <BodyWrapper>
      <div className="container">
        <UserComponent/>
        <HeroTitle>Welcome to My Website</HeroTitle>
        <HeroSubtitle>Discover the best products and services.</HeroSubtitle>
        <CallToAction href="slide">Get Started</CallToAction>
      </div>
    </BodyWrapper>
  );
};

export default Body;
