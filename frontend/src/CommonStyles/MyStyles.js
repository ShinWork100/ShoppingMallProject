import { styled } from "styled-components"; // Import createGlobalStyle

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#1e1f21",
});

const ThemeColors = {
  themeColor: "linear-gradient(45deg, #FFA6C9 30%, #ADD8E6 90%)",
  headerBackground: "#292a2d",
  headerString: "#797981",
};

export { Root, ThemeColors };
