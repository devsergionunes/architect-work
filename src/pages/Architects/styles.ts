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
  padding-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
