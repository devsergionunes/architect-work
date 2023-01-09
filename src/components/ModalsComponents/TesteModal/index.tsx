import Modal from "../index";
import * as S from "./styles";

interface IModalTeste {
  isOpen: boolean;
  onClose: () => void;
}

export function TesteModal({ isOpen, onClose }: IModalTeste) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalBody>Teste</S.ModalBody>
    </Modal>
  );
}
