/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Checkbox from "../../../components/Checkbox";
import { Container, Direction } from "./styles";
import { calculateProgress } from "../../../services/helpers";

const Directions = ({ directions, setIsAllSteps, setProgress, isDisabled }) => {
  const totalSteps = directions.length;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === totalSteps) {
      setIsAllSteps(true);
    }
    calculateProgress(counter, totalSteps, setProgress);
  }, [counter]);

  return (
    <>
      <Container>
        <h1>Modo de preparo</h1>

        {directions.map((step, i) => (
          <Direction key={i}>
            <Checkbox
              setCounter={setCounter}
              counter={counter}
              isDisabled={isDisabled}
            />
            <div>
              <h1>Passo {i + 1}</h1>
              <p>{step}</p>
            </div>
          </Direction>
        ))}
      </Container>
    </>
  );
};

export default Directions;
