import Spinner from "react-bootstrap/Spinner";
import { Container } from "./styles";

const LoadingSpinner = () => {
  return (
    <Container>
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default LoadingSpinner;
