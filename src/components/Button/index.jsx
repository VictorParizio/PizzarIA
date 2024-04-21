import "./styles.css";

export const Button = ({ variant, onClick, children }) => {
  return (
    <button className={`base-button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
