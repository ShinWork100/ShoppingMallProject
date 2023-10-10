import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const DropdownMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff",
    zIndex: theme.zIndex.modal + 1,
  },
}));

const DropdownMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: "0.5rem 1rem",
  "& a": {
    color: "#000",
    textDecoration: "none",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    "& a": {
      color: "#fff",
    },
  },
}));

const DropdownButton = styled(Button)(({ open }) => ({
  color: open ? "#ff474c" : "#797981", // Adjust color based on the open state
  marginLeft: "1.5rem",
  textDecoration: "none",
  position: "relative",
  "&:hover": {
    color: "#ff474c",
  },
}));

const Dropdown = ({
  label,
  items,
  newAnchorEl,
  open,
  setnewAnchorEl,
  setNewState,
  setInfoState,
  setMenuItemState,
}) => {
  const dispatch = useDispatch();
  let closeTimeout = null;

  const handleOpen = (event) => {
    console.log(event);
    setnewAnchorEl(event.target);
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
  };

  const handleClose = () => {
    setnewAnchorEl(null);
    dispatch(setNewState(null)); // Clear the anchorEl
  };

  const handleItemClose = (event) => {
    setnewAnchorEl(null);
    dispatch(setNewState(null));
    dispatch(setMenuItemState(true));
    dispatch(setInfoState(null));
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <DropdownButton
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        open={open}
      >
        {label}
      </DropdownButton>
      <DropdownMenu
        id="dropdown-menu"
        anchorEl={newAnchorEl} // Use anchorPosition as the value
        open={Boolean(newAnchorEl)}
        onClose={handleClose}
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.label} onClick={handleItemClose}>
            {item.link !== "#" ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
