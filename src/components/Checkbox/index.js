import { useState } from "react";
import { Checked, Unchecked } from "./styles";

const Checkbox = ({ counter, setCounter }) => {
  const [check, setCheck] = useState(false);

  const handleClick = () => {
    setCheck(!check);

    if (check) {
      setCounter(counter - 1);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <>
      {check ? (
        <Checked onClick={handleClick} />
      ) : (
        <Unchecked onClick={handleClick} />
      )}
    </>
  );
};

export default Checkbox;
