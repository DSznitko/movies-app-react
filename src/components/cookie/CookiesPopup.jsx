import React, { useEffect } from "react";
import classes from "./Cookie.module.css";

const CookiesPopup = ({ cookieActive, setCookieActive }) => {
  useEffect(() => {
    const cookieEaten = window.localStorage.getItem("cookie-alert");
    if (cookieEaten !== null) setCookieActive(JSON.parse(cookieEaten));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cookie-alert", JSON.stringify(cookieActive));
  }, [cookieActive]);

  return (
    <div className={classes.cookie_wrapper}>
      <h3 className={classes.cookie_text}>This page is uising cookies</h3>
      <button
        onClick={() => setCookieActive(false)}
        className={classes.cookie_button}
      >
        Accept
      </button>
    </div>
  );
};

export default CookiesPopup;
