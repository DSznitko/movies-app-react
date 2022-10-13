import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Slider from "./components/slides/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
    </div>
  );
}

export default App;
