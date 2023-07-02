import React from "react";
import ReactDOM from "react-dom";
import { MDXProvider } from "@mdx-js/react";
import components from "../src/components";
import Example from "./Example.md";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, createTheme, Fab, SvgIcon, } from "@mui/material";

const dark = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    fontFamily: "Sans-serif"
  }
});

const light = createTheme({
  palette: {
    mode: "light"
  },
  typography: {
    fontFamily: "Sans-serif"
  }
});

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {

  const [darkMode, setDarkMode] = React.useState(false);
  const toggle = React.useCallback(() => setDarkMode(darkMode => !darkMode), []);

  return <React.StrictMode>
    <ThemeProvider theme={darkMode ? dark : light}>
      <CssBaseline />
      <MDXProvider components={components()}>
        <Fab onClick={toggle} color="primary" aria-label="mode" sx={{ position: "fixed", left: theme => theme.spacing(1), top: theme => theme.spacing(1) }}>
          <SvgIcon>
            <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
          </SvgIcon>
        </Fab>
        <Container maxWidth="xl">
          <Example />
        </Container>
      </MDXProvider>
    </ThemeProvider>
  </React.StrictMode>
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
