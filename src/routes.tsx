import { ReactElement, ReactNode } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { ArchitectsPage } from "./pages/Architects";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { RegisterPage } from "./pages/Register";
import { api } from "./services/api";
import { isAuthenticated, logout } from "./services/auth";
import { setUserAction } from "./store/ducks/User/actions";
import { useAppDispatch, useAppSelector } from "./store/hooks";

// Função de privatização de rotas
function Private({ children }: { children: ReactNode }): ReactElement {
  const isLogged = isAuthenticated();
  if (!isLogged) {
    logout();
    return <Navigate to="/login" replace />;
  }
  const { user } = useAppSelector((state) => state.User);
  const dispatch = useAppDispatch();
  const navegation = useNavigate();

  if (!user.id) {
    api
      .get("/user")
      .then((response) => dispatch(setUserAction(response.data.user)))
      .catch(() => {
        navegation("/login");
        logout();
      });
  }
  return children as ReactElement;
}

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/regiter" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
        {/* private routes */}
        <Route
          path="/"
          element={
            <Private>
              <HomePage />
            </Private>
          }
        />
        <Route
          path="/architects"
          element={
            <Private>
              <ArchitectsPage />
            </Private>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
