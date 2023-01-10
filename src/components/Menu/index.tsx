import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { MenusMock } from "./Mock";
import * as S from "./styles";

export function MenuLeft({ active }: { active: string }) {
  const navegate = useNavigate();

  const { user } = useAppSelector(({ User }) => User);

  return (
    <S.MenuContainer>
      <S.Heade>
        <S.TextHeader latter="A">rchitect</S.TextHeader>
        <S.TextHeader latter="W">ork</S.TextHeader>
      </S.Heade>
      <S.MenuContent>
        {MenusMock.map((menu) => {
          if (menu.perfil.includes(user.typeProfile)) {
            return (
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
            );
          }
          return null;
        })}
      </S.MenuContent>
    </S.MenuContainer>
  );
}
