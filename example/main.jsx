import React from "react";
import ReactDOM from "react-dom";
import { MDXProvider } from "@mdx-js/react";
import components from "../dist";
import Example from "./Example.md";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    fontFamily: "Sans-serif"
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MDXProvider components={components()}>
        <Container maxWidth="xl">
          <Example />
        </Container>
      </MDXProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
