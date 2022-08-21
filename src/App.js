import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Slider from "./components/slides/Slider";
import CookiesPopup from "./components/cookie/CookiesPopup";

function App() {
  const [cookieActive, setCookieActive] = useState(true);
  return (
    <div className="App">
      <Header />
      <Slider />
      {cookieActive && (
        <CookiesPopup
          cookieActive={cookieActive}
          setCookieActive={setCookieActive}
        />
      )}
    </div>
  );
}

export default App;
