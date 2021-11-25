import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button, ModalButton } from "../../../components/Button";
import { Content } from "./styles";
import { useTimer } from "../../../providers/Timer";

const FinishModal = () => {
  const [show, setShow] = useState(false);
  const { time, setStartTimer } = useTimer();

  const handleShow = () => {
    setShow(true);
    setStartTimer(false);
  };

  const handleClose = () => {
    setShow(false);
  };

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
            <p>
              Prato finalizado com sucesso em 23 minutos e 19 segundos! {time}
            </p>
            <ModalButton onClick={handleClose}>OK</ModalButton>
          </Content>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FinishModal;
