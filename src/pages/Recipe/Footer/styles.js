import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Container = styled.div`
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
