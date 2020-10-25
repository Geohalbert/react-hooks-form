import React from "react";
import "../styles/InputField.css";

export default function InputField(props) {
  const {
    autoFocus,
    required,
    label,
    onChange,
    pattern,
    placeholder,
    type,
    name,
    value,
    validationFnc,
    ...rest
  } = props;

  // needed for displaying "REQUIRED" label
  const patt = new RegExp(pattern);
  const showLabel = !patt.test(value);

  return (
    <div className="field">
      <div className="labels">
        <label>{label} </label>
        {showLabel && required && <span className="reqLabel">REQUIRED</span>}
      </div>
      <input
        autoFocus={autoFocus}
        type={type}
        name={name}
        value={value}
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        onChange={text => onChange(text)}
      />
    </div>
  );
}
