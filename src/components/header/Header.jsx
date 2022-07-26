import React, { useState } from "react";
import classes from "./Header.module.css";
import { FaSearch, FaHeart } from "react-icons/fa";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);

  const searchActiveHandler = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div className={classes.header}>
      <h1 className={classes.headerLogo}>
        <span className={classes.blue}>Mo</span>vies
        <span className={classes.blue}>A</span>pp
      </h1>
      <div className={classes.searchContainer}>
        <FaSearch
          onClick={searchActiveHandler}
          className={classes.searchIcon}
        />
        <input
          className={`${classes.searchInput} ${
            searchActive ? classes.active : ""
          }`}
          type="text"
          placeholder="search for movie.."
        />
      </div>
      <div className={classes.favMovies}>
        <h3 className={classes.favMovies__title}>Your Movies</h3>
        <FaHeart className={classes.favMovies__icon} />
      </div>
    </div>
  );
};

export default Header;
