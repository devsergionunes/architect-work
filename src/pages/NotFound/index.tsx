import { useNavigate } from "react-router-dom";

import * as S from "./styles";

export function NotFound() {
  const navegation = useNavigate();
  return (
    <S.conteiner>
      <S.Image src="/images/404.svg" alt="Ilustração de erro 404" />
      <S.LinkHome onClick={() => navegation("/")}>Voltar para home</S.LinkHome>
    </S.conteiner>
  );
}
