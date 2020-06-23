import React, { useState } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import "./ButtonGrid.scss";

const ButtonGrid = ({ buttons }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="button-grid">
      {buttons.map(btn => (
        <button
          className={cls("grid-btn", { selected: selected === btn })}
          key={btn}
          onClick={() => {
            setSelected(btn);
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

ButtonGrid.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ButtonGrid;
