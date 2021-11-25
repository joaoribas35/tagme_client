import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button, ModalButton } from "../../../components/Button";
import { Content } from "./styles";

const StartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Iniciar preparação</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Content>
            <p>
              Para iniciar a preparação, certifique-se de que você tem todos os
              ingredientes selecionados!
            </p>
            <ModalButton onClick={handleClose}>Entendi</ModalButton>
          </Content>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StartModal;
