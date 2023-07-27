import React from 'react';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';

const DropdownButton = styled(Button)({
  color: '#fff',
  marginLeft: '1.5rem',
  textDecoration: 'none',
  position: 'relative', // Required for dropdown positioning
});

const DropdownMenu = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
    zIndex: theme.zIndex.modal + 1,
  },
}));

const DropdownMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: '0.5rem 1rem',
  '& a': {
    color: '#000', // Change the text color to black
    textDecoration: 'none', // Remove the underline
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main, // Add a background color on hover (optional)
    '& a': {
      color: '#fff', // Change the text color to white on hover
    },
  },
}));

const Dropdown = ({ label, items, anchorEl, open,setAnchorEl}) => {
  const handleClick = (event) => {
    setAnchorEl(event.target);
    console.log(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DropdownButton
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {label}
      </DropdownButton>
      <DropdownMenu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.label} onClick={handleClose}>
            <a href={item.link}>{item.label}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </>
  );
};

export default Dropdown;
