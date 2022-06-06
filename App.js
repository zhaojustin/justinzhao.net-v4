import React from "react";
import { TerminalContextProvider } from "react-terminal";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./styles.css";

import Container from "@mui/material/Container";

import Wrapper from "./components/Wrapper";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Mono",
  },
});

export default function App() {
  return (
    <Container maxWidth="md">
      <ThemeProvider theme={theme}>
        <TerminalContextProvider>
          <Wrapper />
        </TerminalContextProvider>
      </ThemeProvider>
    </Container>
  );
}
