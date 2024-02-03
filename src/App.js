import { useEffect } from "react";
import "./App.css";
import AppNavigation from "./config/router/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#192a3e",
      contrastText: "#FFFFFF", // Change the primary color
    },
    secondary: {
      main: "#FFFFF", // Change the secondary color
    },
    danger: {
      main: "#FF0000", // Change the secondary color
    },
  },
});

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
}

export default App;
