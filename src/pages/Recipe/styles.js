import styled from "styled-components";
import arroz_marisco from "../../assets/img/prato-arroz-grande.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${arroz_marisco}) center center/cover no-repeat;
  height: 589px;
  justify-content: space-between;
  padding: 15px 30px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #fff;
`;

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-font-recipe);

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  height: 60px;
  padding: 40px 30px;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bar = styled(ProgressBar)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  height: 5px;
  background-color: var(--color-bg-primary);
  transition: width 0.6s ease;
  min-width: 5%;
  width: ${(props) => (props.now ? props.now : "auto")};
`;

export const BarSuccess = styled(Bar)`
  background-color: var(--color-bg-green);
`;
