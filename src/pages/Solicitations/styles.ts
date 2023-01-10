/* eslint-disable no-nested-ternary */
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
  padding: 3rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 2rem;
  margin: 2rem auto;
  /* overflow-y: auto; */
`;

export const Item = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: ${theme.background.paper};
    cursor: pointer;
  `}
`;

export const BoxStatus = styled.div<{ status: number }>`
  ${({ theme, status }) => css`
    width: min-content;
    margin-left: auto;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: ${status === 1
      ? "rgba(255, 255, 255, 0.5)"
      : status === 2
      ? "rgba(0, 255, 0, 0.5)"
      : "rgba(255, 0, 0, 0.5)"};

    span {
      font-size: 1rem;
      font-weight: 500;
      color: ${theme.text.primary};
    }
  `}
`;
