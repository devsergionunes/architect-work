import CloseIcon from "@mui/icons-material/Close";
import { Modal as ModalMUI, Fade as FadeMUI } from "@mui/material";
import styled, { css } from "styled-components";

export const Modal = styled(ModalMUI)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
`;

export const Fade = styled(FadeMUI)`
  ${({ theme }) => css`
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: ${theme.background.default};
    marginbottom: 1rem;
    position: relative;

    @media (max-width: 768px) {
      border-radius: 4px;
    }
  `}
`;

export const Content = styled.div`
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 85vh;
    overflow-y: auto;
  }
`;

export const TopModal = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: 5px;
    border-radius: 8px 8px 0 0;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.primary.main};

    span {
      position: absolute;
      bottom: 0;
    }

    @media (max-width: 768px) {
      padding: 6px 0;
      border-radius: 4px 4px 0 0;
    }
  `}
`;

export const CloseModal = styled(CloseIcon)`
  ${({ theme }) => css`
    color: ${theme.text.primary};
    position: absolute;
    right: 15px;
    cursor: pointer;
    &:active {
      transition: none;
      transform: translateY(0.7px);
    }
  `}
`;
