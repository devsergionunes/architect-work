import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-color: ${theme.background.default};

    @media screen {
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  `}
`;

export const Content = styled.div`
  flex: 1;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContainerImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: auto;

  @media screen {
    @media (max-width: 768px) {
      margin: 1.5rem auto;
    }
  }
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 300px;
    padding: 0.5rem;
    background-color: ${theme.palette.primary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `}
`;

export const Image = styled.img`
  width: 100%;
`;
