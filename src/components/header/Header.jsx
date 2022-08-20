import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerLogo}>
        <span className={classes.blue}>Mo</span>vies
        <span className={classes.blue}>A</span>pp
      </h1>
      <div className={classes.favMovies}>
        <h3 className={classes.favMovies__title}>Your Movies</h3>
        <FaHeart className={classes.favMovies__icon} />
      </div>
    </div>
  );
};

export default Header;
