import { Container, Content, CloseIcon } from "./styles";
import closeIcon from "../../assets/img/icon-close.png";

const MyModal = ({ children, handleClose }) => {
  return (
    <Container>
      <CloseIcon>
        <img src={closeIcon} alt="close" onClick={handleClose} />
      </CloseIcon>
      <Content>{children}</Content>
    </Container>
  );
};

export default MyModal;
