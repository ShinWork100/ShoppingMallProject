import React from 'react';
import { styled } from 'styled-components';

const FooterWrapper = styled('footer')({
  backgroundColor: '#000',
  color: '#fff',
  padding: '2rem',
  textAlign: 'center',
  marginTop: 'auto', // Push the footer to the bottom
  flexShrink: 0, // Prevent the footer from shrinking when content is long
});

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
