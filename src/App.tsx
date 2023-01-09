import {
  ThemeProvider as ThemeMaterial,
  ThemeOptions,
  createTheme,
} from "@mui/material";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { ToastContainerCustom } from "./components/Toasts";
import { MyRoutes } from "./routes";
import { GlobalStyle } from "./styles/Global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <ThemeMaterial theme={createTheme(theme as ThemeOptions)}>
        <GlobalStyle />
        <MyRoutes />
        <ToastContainerCustom />
      </ThemeMaterial>
    </ThemeProvider>
  );
}

export default App;
