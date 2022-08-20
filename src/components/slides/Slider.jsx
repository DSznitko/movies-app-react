import React from "react";
import classes from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={classes.slider_container}>
      <h2 className={classes.slider_title}>
        Top Rated <span className={classes.thin}>Movies</span>
      </h2>
      <ul className={classes.slides}></ul>
    </div>
  );
};

export default Slider;
