import { useState } from "react";
import { Button } from "../Button";
import "./styles.css";

export const Control = ({ variant, quantity = 0, textBtn = false, onAdd }) => {
  const [counter, setCounter] = useState(quantity);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setCounter(value);
  };

  const handleClickLess = () => {
    setCounter((prevCounter) => (prevCounter <= 0 ? 0 : prevCounter - 1));
  };

  const handleClickMore = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleAddProduct = () => {
    onAdd(counter);
    setCounter(0);
  };

  return (
    <div className="control">
      <div>
        <Button variant={variant} id="less" onClick={handleClickLess}>
          -
        </Button>

        <input
          className={`${variant}-input`}
          type="number"
          value={counter}
          onChange={handleChange}
        />

        <Button variant={variant} id="more" onClick={handleClickMore}>
          +
        </Button>
      </div>

      {textBtn && (
        <Button variant={"medium"} onClick={handleAddProduct}>
          {textBtn}
        </Button>
      )}
    </div>
  );
};
