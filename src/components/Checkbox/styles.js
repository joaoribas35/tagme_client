import styled from "styled-components";
import check_icon from "../../assets/img/icon-check.png";

export const Checked = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-color: var(--color-bg-green);
  background-image: url(${check_icon});
  cursor: pointer;
`;

export const Unchecked = styled(Checked)`
  background-color: #fff;
`;
