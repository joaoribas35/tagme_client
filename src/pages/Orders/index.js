import React from "react";
import { Container, Title } from "./styles";
import Topbar from "../../components/Topbar";

const Orders = () => {
  return (
    <>
      <Topbar />
      <Container>
        <Title>Nenhum pedido no momento</Title>
      </Container>
    </>
  );
};

export default Orders;
