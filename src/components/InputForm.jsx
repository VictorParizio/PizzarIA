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
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-label={textLabel}
      />
    </>
  );
};
