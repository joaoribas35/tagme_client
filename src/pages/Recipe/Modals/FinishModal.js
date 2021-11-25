import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button, ModalButton } from "../../../components/Button";
import { Content } from "./styles";
import { useTimer } from "../../../providers/Timer";
import { showTotalTime } from "../../../services/helpers";
import { useHistory } from "react-router-dom";

const FinishModal = () => {
  const [show, setShow] = useState(false);
  const { time, setStartTimer } = useTimer();
  const history = useHistory();

  const handleShow = () => {
    setShow(true);
    setStartTimer(false);
  };

  const handleClose = () => {
    setShow(false);
    history.push("/receitas");
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
            <p>Prato finalizado com sucesso em {showTotalTime(time)}!</p>
            <ModalButton onClick={handleClose}>OK</ModalButton>
          </Content>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FinishModal;
