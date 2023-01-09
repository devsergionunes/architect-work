import styled, { css } from "styled-components";

export const conteiner = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.background.default};
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: clamp(500px, 50%, 700px);
    background-color: ${theme.background.paper};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  `};
`;
