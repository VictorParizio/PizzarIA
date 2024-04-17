import "./styles.css";

export const Control = ({variant}) => {
  return (
    <div className="control">
      <button className={variant} id="back">-</button>
      <input className={`${variant}-input`} type="number" value="0" />
      <button className={variant} id="next">+</button>
    </div>
  );
};
