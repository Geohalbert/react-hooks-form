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

  return (
    <div className="field">
      <div className="labels">
        <label for={name}>{label} </label>
        here the warning labe is used
        {required && (
          <span className="reqLabel" id={name + "ReqLabel"}>
            REQUIRED
          </span>
        )}
      </div>
      <input
        autoFocus={autoFocus}
        id={name}
        name={name}
        onChange={text => onChange(text)}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        title={title}
        type={type}
        value={value}
      />
    </div>
  );
}
