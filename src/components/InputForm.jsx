export const InputForm = ({
  textLabel,
  type,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{textLabel}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
