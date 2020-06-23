import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./SlideFooter.scss";

const SlideFooter = ({ count }) => {
  const [selected, setSelected] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(new Array(count).fill(0));
  }, [count]);

  const next = () => {
    if (selected < count - 1) {
      setSelected(selected + 1);
    }
  };

  const back = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    }
  };

  return (
    <div className="slide-footer">
      <div className="left">
        <button className="btn back" disabled={selected === 0} onClick={back}>
          Back
        </button>
      </div>
      <div className="center">
        {slides.map((_, i) => (
          <span
            key={i}
            className={cls("bullet", { selected: i === selected })}
            onClick={() => {
              setSelected(i);
            }}
          />
        ))}
      </div>
      <div className="right">
        <button className="btn done" onClick={next}>
          {selected === count - 1 ? "Done" : "Next"}
        </button>
      </div>
    </div>
  );
};

SlideFooter.propTypes = {
  count: PropTypes.number.isRequired
};

export default SlideFooter;
