export const InputForm = ({
  textLabel,
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={name}>{textLabel}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
