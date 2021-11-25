import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button, ModalButton } from "../../../components/Button";
import { Content } from "./styles";

const FinishModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button success onClick={handleShow}>
        Finalizar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Content>
            <h1>OBRIGADO</h1>
            <p>Prato finalizado com sucesso em 23 minutos e 19 segundos!</p>
            <ModalButton onClick={handleClose}>OK</ModalButton>
          </Content>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FinishModal;
