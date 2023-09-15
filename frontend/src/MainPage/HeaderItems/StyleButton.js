import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ open }) => ({
  color: open ? "#ff474c" : "#797981", // Adjust color based on the open state
  marginLeft: "1.5rem",
  textDecoration: "none",
  position: "relative",
  "&:hover": {
    color: "#ff474c",
  },
}));

const StyleButton = ({ label, setInfoAnchorEl, open }) => {
  const handleButtonClick = () => {
    console.log("toggle");
    setInfoAnchorEl(!open); // toggle the open state
  };

  return (
    <StyledButton
      aria-controls="styled-button"
      aria-haspopup="true"
      open={open}
      onClick={handleButtonClick}
    >
      {label}
    </StyledButton>
  );
};

export default StyleButton;
