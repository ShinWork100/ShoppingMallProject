import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const StyledButton = styled(Button)(({ open }) => ({
  color: open ? "#ff474c" : "#797981", // Adjust color based on the open state
  marginLeft: "1.5rem",
  textDecoration: "none",
  position: "relative",
  "&:hover": {
    color: "#ff474c",
  },
}));

const StyleButton = ({
  label,
  setInfoState,
  setNewState,
  setMenuItemState,
  open,
}) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setInfoState(true)); // toggle the open state
    dispatch(setMenuItemState(null));
    dispatch(setNewState(null)); // Dispatch the setNewState action with the desired value
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
