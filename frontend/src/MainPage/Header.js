import React from 'react';
import { styled } from '@mui/material/styles';
import { homeItems, productItems } from './constants'; // Import the constants
import Dropdown from './HeaderItems/Dropdown';
import { Button } from '@mui/material';

const HeaderWrapper = styled('header')({
  backgroundColor: '#000',
  color: '#fff',
  padding: '.25rem 1rem', /* Increased padding at the top and bottom */
  // flexShrink: 0, // Prevent the header from shrinking when content is long
});

const LogoButton = styled(Button)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#fff',
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
        <Nav>
          <a href="home">
            <LogoButton >Dong Shin</LogoButton>
          </a>
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
          </div>
            {/* Repeat the same pattern for the other NavItems */}
        </Nav>
    </HeaderWrapper>
  );
};

export default Header;
