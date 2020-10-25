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

  return (
    <div className="field">
      <label>{label}</label>
      {/* insert conditional for 'REQUIRED' label */}
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
