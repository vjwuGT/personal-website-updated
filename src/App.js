import React from "react";
import "./App.css";
import ScrollSelection from "./components/ScrollSelection/ScrollSelection";
import Contact from "./components/contact/Contact";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <Parallax/>
      <ScrollSelection />
      <Contact/>
    </div>
  );
}

export default App;
