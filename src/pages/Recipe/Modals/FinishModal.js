import { useState } from "react";
import { Button, ModalButton } from "../../../components/Button";

import { useTimer } from "../../../providers/Timer";
import { showTotalTime } from "../../../services/helpers";
import { useHistory } from "react-router-dom";
import MyModal from "../../../components/Modal";

const FinishModal = () => {
  const [show, setShow] = useState(false);
  const { time, setStartTimer, setTime } = useTimer();
  const history = useHistory();

  const handleShow = () => {
    setShow(true);
    setStartTimer(false);
  };

  const handleClose = () => {
    setShow(false);
    setTime(0);
    history.push("/receitas");
  };

  return (
    <>
      <Button success onClick={handleShow}>
        Finalizar
      </Button>

      {show && (
        <MyModal handleClose={handleClose}>
          <h1>OBRIGADO</h1>
          <p>Prato finalizado com sucesso em {showTotalTime(time)}!</p>
          <ModalButton onClick={handleClose}>OK</ModalButton>
        </MyModal>
      )}
    </>
  );
};

export default FinishModal;
