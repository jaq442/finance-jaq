export const Input = ({ id, label, placeholder, type, value, setValue }) => {
  return (
    <div className="input">
      <label className="body caption" htmlFor={id}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      />
    </div>
  );
};
