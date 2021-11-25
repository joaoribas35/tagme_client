import React from "react";
import { Container, Bar, BarSuccess } from "./styles";
import StartModal from "../Modals/StartModal";
import FinishModal from "../Modals/FinishModal";
import { showMinutes } from "../../../services/helpers";
import { Button } from "../../../components/Button";

const Footer = ({
  progress,
  time,
  verifyIngredients,
  startPrep,
  isAllSteps,
}) => {
  return (
    <Container>
      <div>
        Status <strong>{progress}</strong> pronto e {showMinutes(time)}{" "}
        minuto(s) utilizado(s)
        {progress === "100%" ? (
          <BarSuccess now={progress} />
        ) : (
          <Bar now={progress} />
        )}
      </div>
      <div onClick={verifyIngredients}>
        {startPrep ? (
          isAllSteps ? (
            <FinishModal />
          ) : (
            <Button success disabled>
              Finalizar
            </Button>
          )
        ) : (
          <StartModal />
        )}
      </div>
    </Container>
  );
};

export default Footer;
