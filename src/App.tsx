import {
  ThemeProvider as ThemeMaterial,
  ThemeOptions,
  createTheme,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { MyRoutes } from "./routes";
import { GlobalStyle } from "./styles/Global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <ThemeMaterial theme={createTheme(theme as ThemeOptions)}>
        <GlobalStyle />
        <MyRoutes />
        <ToastContainer autoClose={3000} />
      </ThemeMaterial>
    </ThemeProvider>
  );
}

export default App;
