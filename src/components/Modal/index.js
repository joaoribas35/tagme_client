import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "../Button";

const LiveModal = ({ children, label, disabled, variant }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {variant ? (
        <Button success onClick={handleShow} disabled={disabled}>
          {label}
        </Button>
      ) : (
        <Button onClick={handleShow} disabled={disabled}>
          {label}
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LiveModal;
