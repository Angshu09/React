import React from "react";

export default function Select({
  label,
  value,
  onChange,
  defaultOption,
  error,
  arr,
}) {
  return (
    <div className="input-container">
      <label htmlFor={label}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <select id={label} name={label} value={value} onChange={onChange}>
        <option value="" hidden>
          {defaultOption}
        </option>
        {arr.map((option, index) => {
          return <option key={index} value={option}>{option}</option>;
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}
