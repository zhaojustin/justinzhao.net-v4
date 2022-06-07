import React from "react";

import { TerminalContextProvider } from "react-terminal";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./styles.css";

import Container from "@mui/material/Container";

import Wrapper from "./components/Wrapper";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Mono",
  },
  components: {
    MuiButtonBase: {
      fontFamily: "Roboto Mono",
    },
  },
});

export default function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <TerminalContextProvider>
            <Wrapper />
          </TerminalContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Container>
  );
}
