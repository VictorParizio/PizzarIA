import "./styles.css";

export const Button = ({ variant, onClick, children, disabled = false }) => {
  return (
    <button className={`base-button ${variant}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
