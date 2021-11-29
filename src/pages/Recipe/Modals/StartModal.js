import { useState } from "react";
import { Button, ModalButton } from "../../../components/Button";
import MyModal from "../../../components/Modal";

const StartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Iniciar preparação</Button>

      {show && (
        <MyModal handleClose={handleClose}>
          <p>
            Para iniciar a preparação, certifique-se de que você tem todos os
            ingredientes selecionados!
          </p>
          <ModalButton onClick={handleClose}>Entendi</ModalButton>
        </MyModal>
      )}
    </>
  );
};

export default StartModal;
