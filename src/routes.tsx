import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { RegisterPage } from "./pages/Register";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/regiter" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
