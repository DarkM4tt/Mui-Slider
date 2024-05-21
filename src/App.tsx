import React from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import AutoTopUp from "./components/AutoTopUp";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <AutoTopUp />
      </Container>
    </ThemeProvider>
  );
};

export default App;
