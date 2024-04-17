import "./styles.css";

export const Button = ({ variant, children, onClick }) => {
  return (
    <button className={`base-button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
