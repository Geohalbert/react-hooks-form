import React from "react";
import "../styles/InputField.css";

export default function InputField(props) {
  const {
    autoFocus,
    label,
    name,
    onChange,
    pattern,
    placeholder,
    required,
    title,
    type,
    value
  } = props;

  // needed for displaying "REQUIRED" label
  const patt = new RegExp(pattern);
  const showLabel = !patt.test(value);

  return (
    <div className="field">
      <div className="labels">
        <label for={name}>{label} </label>
        {/* 'REQUIRED' label appears with conditionals */}
        {showLabel && required && <span className="reqLabel">REQUIRED</span>}
      </div>
      <input
        id={name}
        autoFocus={autoFocus}
        type={type}
        name={name}
        value={value}
        required={required}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
        onChange={text => onChange(text)}
      />
    </div>
  );
}
