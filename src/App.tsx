import {
  ThemeProvider as ThemeMaterial,
  ThemeOptions,
  createTheme,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/Global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <ThemeMaterial theme={createTheme(theme as ThemeOptions)}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <div>Hello Word</div>
      </ThemeMaterial>
    </ThemeProvider>
  );
}

export default App;
