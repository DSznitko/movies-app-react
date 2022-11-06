import React from "react";
import classes from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={classes.slider__container}>
      <h2 className={classes.slider__title}>
        Top Rated <span className={classes.thin}>Movies</span>
      </h2>
      <ul className={classes.slides}></ul>
    </div>
  );
};

export default Slider;
