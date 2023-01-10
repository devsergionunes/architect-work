import { useNavigate } from "react-router-dom";

import { MenusMock } from "./Mock";
import * as S from "./styles";

export function MenuLeft({ active }: { active: string }) {
  const navegate = useNavigate();

  return (
    <S.MenuContainer>
      <S.Heade>
        <S.TextHeader latter="A">rchitect</S.TextHeader>
        <S.TextHeader latter="W">ork</S.TextHeader>
      </S.Heade>
      <S.MenuContent>
        {MenusMock.map((menu) => (
          <S.ButtonMenu
            key={menu.id}
            onClick={() => {
              if (menu.path) navegate(menu.path);
              if (menu.action) menu.action();
            }}
            active={menu.name === active}
          >
            {menu.name}
            {menu.icon}
          </S.ButtonMenu>
        ))}
      </S.MenuContent>
    </S.MenuContainer>
  );
}
