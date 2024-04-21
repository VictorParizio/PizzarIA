import './styles.css'

export const InputForm = ({ textLabel, type, id, placeholder }) => {
  return (
    <>
      <label htmlFor={id}>{textLabel}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </>
  );
};
