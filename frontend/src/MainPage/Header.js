import React, { useState } from "react";
import { styled, experimentalStyled as styled2 } from "@mui/material/styles"; // Ensure you import experimentalStyled
import { productItems } from "./constants"; // Import the constants
import Dropdown from "./HeaderItems/Dropdown";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import StyleButton from "./HeaderItems/StyleButton";
import { useSelector, useDispatch } from "react-redux";
import {
  setInfoState,
  setNewState,
  setMenuItemState,
} from "../Redux/anchorElSlice";

const HeaderWrapper = styled("header")({
  backgroundColor: "#292a2d",
  color: "#797981",
});

const LogoButton = styled2(Button)(({ theme }) => ({
  // Note the usage of styled2
  fontSize: "1.5rem",
  fontWeight: "bold",
  textDecoration: "none",
  background: "linear-gradient(45deg, #ff474c 30%, #4b57db 90%)", // Gradient from red to yellow
  color: "white",
  padding: "0.3rem 1rem", // Some padding to make the gradient more visible
  borderRadius: "5px", // A slight border radius for aesthetics
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', // A slight box-shadow to enhance the visual appeal
  // '&:hover': { // Adjusting the hover state
  //   backgroundColor: 'transparent', // Since the background is now gradient, remove the hover color change
  // },
}));

const Nav = styled("nav")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ".25rem 0",
  position: "relative", // This ensures children with absolute positioning use this as their reference
  marginLeft: "5%", // Adjust this value as needed
  marginRight: "5%", // Adjust this value as needed
});

const DropdownsContainer = styled("div")({
  display: "flex",
  gap: "1rem",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)", // This shifts the element leftwards by half its width, ensuring it's perfectly centered
});

const Header = () => {
  const dispatch = useDispatch();
  const infoState = useSelector((state) => state.anchorEl.infoState);
  const newState = useSelector((state) => state.anchorEl.newState);
  const menuItemState = useSelector((state) => state.anchorEl.menuItemState);
  const [newAnchorEl, setnewAnchorEl] = useState(null);

  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/home">
          <LogoButton>DS</LogoButton>
        </Link>
        <DropdownsContainer>
          <StyleButton
            label="Information"
            open={Boolean(infoState)}
            setNewState={(val) => dispatch(setNewState(val))}
            setInfoState={(val) => dispatch(setInfoState(val))}
            setMenuItemState={(val) => dispatch(setMenuItemState(val))}
          />
          <Dropdown
            label="New"
            items={productItems}
            anchorEl={newState}
            open={Boolean(newState || menuItemState)}
            newAnchorEl={newAnchorEl}
            setnewAnchorEl={setnewAnchorEl}
            setNewState={(val) => dispatch(setNewState(val))}
            setInfoState={(val) => dispatch(setInfoState(val))}
            setMenuItemState={(val) => dispatch(setMenuItemState(val))}
          />
        </DropdownsContainer>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
