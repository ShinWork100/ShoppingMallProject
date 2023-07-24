import React from 'react';
import { styled } from '@mui/material/styles';
import { homeItems, productItems } from './constants'; // Import the constants
import Dropdown from './HeaderItems/Dropdown';

const HeaderWrapper = styled('header')({
  backgroundColor: '#000',
  color: '#fff',
  padding: '2rem 1rem', /* Increased padding at the top and bottom */
  flexShrink: 0, // Prevent the header from shrinking when content is long
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

const Header = () => {
  const [homeAnchorEl, setHomeAnchorEl] = React.useState(null);
  const [productAnchorEl, setProductAnchorEl] = React.useState(null);

  return (
    <HeaderWrapper>
      <div className="container">
        <Nav>
          <Logo>My Website</Logo>
          <div>
            <Dropdown
              label="Home"
              items={homeItems}
              anchorEl={homeAnchorEl}
              open={Boolean(homeAnchorEl)}
              setAnchorEl={setHomeAnchorEl}
            />

            <Dropdown
              label="Products"
              items={productItems}
              anchorEl={productAnchorEl}
              open={Boolean(productAnchorEl)}
              setAnchorEl={setProductAnchorEl}
            />

            {/* Repeat the same pattern for the other NavItems */}
          </div>
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
