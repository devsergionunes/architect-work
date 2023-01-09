import styled, { css } from "styled-components";

import { Span } from "../../components/base/Text";

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
    width: clamp(300px, 50%, 400px);
    background-color: ${theme.background.paper};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  `};
`;

export const LinkForgotPassword = styled(Span)`
  ${({ theme }) => css`
    width: 100%;
    text-align: right;
    margin-top: -2rem;
    color: ${theme.palette.primary.dark};
    cursor: pointer;
    z-index: 999999999999;
  `}
`;
