import { useState } from "react";
import { Checked, Unchecked } from "./styles";

const Checkbox = ({ isChecked }) => {
  const [check, setCheck] = useState(false);

  const handleClick = () => {
    setCheck(!check);
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
