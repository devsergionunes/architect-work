/* eslint-disable react/require-default-props */
import { Backdrop } from "@mui/material";
import { ReactNode } from "react";

import * as T from "../base/Text";
import * as S from "./styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
};

function Modal({ children, isOpen, onClose, title }: ModalProps) {
  return (
    <S.Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <S.Fade in={isOpen}>
        <S.Content>
          {title && (
            <S.TopModal>
              <T.H3 textAlign="center">{title}</T.H3>
              <S.CloseModal onClick={onClose} />
            </S.TopModal>
          )}
          {children}
        </S.Content>
      </S.Fade>
    </S.Modal>
  );
}

export default Modal;
