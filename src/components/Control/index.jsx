import { useState } from "react";
import "./styles.css";

export const Control = ({ variant }) => {
  const [counter, setCounter] = useState(0);

  function handleChange(event) {
    const value = parseInt(event.target.value);
    setCounter(value);
  }

  function handleClickLess() {
    counter <= 0 ? setCounter(0) : setCounter(counter - 1);
  }

  function handleClickMore() {
    setCounter(counter + 1);
  }

  return (
    <div className="control">
      <button className={variant} id="less" onClick={handleClickLess}>
        -
      </button>
      <input
        className={`${variant}-input`}
        type="number"
        value={counter}
        onChange={handleChange}
      />
      <button className={variant} id="more" onClick={handleClickMore}>
        +
      </button>
    </div>
  );
};
