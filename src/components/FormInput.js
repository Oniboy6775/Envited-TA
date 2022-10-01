import React from "react";
import DatePicker from "react-datepicker";
import { useAppContext } from "../context/appContext";

const FormInput = ({
  name,
  value,
  type,
  label,
  onChange,
  required,
  placeholder,
  minDate,
}) => {
  const { handleChange } = useAppContext();
  return (
    <div className="form-row">
      <label htmlFor="" className="form-label">
        {label} {!required && <span className="form-optional">(optional)</span>}
      </label>
      {type === "date" ? (
        <DatePicker
          name={name}
          value={value}
          className="form-input"
          selected={value}
          onChange={(date) => handleChange({ name, value: date })}
          showTimeSelect
          dateFormat="d/MM/yyyy h:mm aa"
          minDate={minDate}
        />
      ) : (
        <input
          onChange={onChange}
          name={name}
          value={value}
          type={type}
          className="form-input"
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default FormInput;
