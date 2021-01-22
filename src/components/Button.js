import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color, onAdd }) => {
  const btnStyle = {
    cursor: "Pointer",
  };
  return (
    <div>
      <button
        onClick={onAdd}
        style={btnStyle}
        type="button"
        className={`btn btn-${color}`}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "Primary",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
