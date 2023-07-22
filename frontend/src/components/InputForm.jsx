import React from "react";
import PropTypes from "prop-types";

function InputForm({ state, setter, type, placeholder }) {
  const maxLength = 50;
  const handleChangeForm = (event) => {
    if (event.target.value.length <= maxLength) {
      setter(event.target.value);
    }
  };
  return (
    <div className="input-Form-container">
      <input
        className="input-Form"
        type={type}
        required
        value={state}
        onChange={handleChangeForm}
        placeholder={placeholder}
      />
    </div>
  );
}
InputForm.propTypes = {
  state: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default InputForm;
