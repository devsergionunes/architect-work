import ArchitectureIcon from "@mui/icons-material/Architecture";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import RequestPageIcon from "@mui/icons-material/RequestPage";

import { logout } from "../../services/auth";

export const MenusMock = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    path: "/",
    perfil: [1, 2],
  },
  {
    id: 2,
    name: "Arquitetos",
    icon: <ArchitectureIcon />,
    path: "/architects",
    perfil: [1],
  },
  {
    id: 3,
    name: "Solicitações",
    icon: <RequestPageIcon />,
    path: "/solicitations",
    perfil: [1, 2],
  },
  {
    id: 4,
    name: "Sair",
    icon: <LogoutIcon />,
    action: () => logout(),
    perfil: [1, 2],
  },
];
