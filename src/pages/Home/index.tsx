import * as T from "../../components/base/Text";
import { MenuLeft } from "../../components/Menu";
import * as S from "./styles";

export function HomePage() {
  return (
    <S.Container>
      <MenuLeft active="Home" />
      <S.Content>
        <T.H2>
          Os melhores arquitetos do brasil <br /> ao seu alcançe
        </T.H2>
        <T.Paragraph color="#555">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Nullam id dolor id nibh ultricies
          vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu
        </T.Paragraph>
        <S.ContainerImages>
          <S.ImageBox>
            <S.Image
              src="/images/architeture-ilustration.jpg"
              alt="Ilustração da arquitetura"
            />
          </S.ImageBox>
          <S.ImageBox>
            <S.Image
              src="/images/architeture-ilustration.jpg"
              alt="Ilustração da arquitetura"
            />
          </S.ImageBox>
          <S.ImageBox>
            <S.Image
              src="/images/architeture-ilustration.jpg"
              alt="Ilustração da arquitetura"
            />
          </S.ImageBox>
        </S.ContainerImages>
      </S.Content>
    </S.Container>
  );
}
