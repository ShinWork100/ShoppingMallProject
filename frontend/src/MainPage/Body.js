import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const BodyWrapper = styled('section')({
  // backgroundColor: '#1e1f21',
  padding: '4rem 1rem',
  textAlign: 'center',
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const HeroTitle = styled('h1')({
  fontSize: '3rem',
  marginBottom: '1rem',
});

const HeroSubtitle = styled('p')({
  fontSize: '1.5rem',
  marginBottom: '2rem',
});

const CallToAction = styled(Link)({
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
        <HeroTitle>Welcome to My Website</HeroTitle>
        <HeroSubtitle>Discover the best products and services.</HeroSubtitle>
        <CallToAction to="/slide">Get Started</CallToAction>
      </div>
    </BodyWrapper>
  );
};

export default Body;
