import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      
      <Weather defaultCity="manchester"/>
      
      <footer>
        <a
          href="https://iridescent-faun-662cb2.netlify.app/"
          target="blank"
          rel="noreferrer"
        >
          Nneka Umerah{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/Cocreatorpattern/atmosphere-app"
          target="blank"
          rel="noreferre"
        >
          {" "}
          open-sourced on Github
        </a>
      </footer>
    </div>
    </div>
  );
}
