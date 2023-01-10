import styled, { css } from "styled-components";

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    width: 23.75rem;
    min-height: 100vh;
    padding: 2rem;
    background-color: ${theme.background.paper};
    display: flex;
    flex-direction: column;

    @media screen {
      @media (max-width: 768px) {
        min-height: auto;
        width: 100%;
      }
    }
  `}
`;

export const MenuContent = styled.nav`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  gap: 2rem;

  @media screen {
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }
`;

export const Heade = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextHeader = styled.h1<{ latter: string }>`
  ${({ theme, latter }) => css`
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    color: ${theme.text.primary};
    display: inline;

    ::before {
      content: "${latter}";
      display: inline-block;
      color: ${theme.palette.primary.main};
    }
  `}
`;

export const ButtonMenu = styled.button<{ active: boolean }>`
  ${({ theme, active }) => css`
    width: 100%;
    max-width: 300px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 0.5rem;
    color: ${theme.text.primary};
    background-color: ${active
      ? theme.palette.primary.main
      : theme.background.active};
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.background.hover};
    }
  `}
`;
