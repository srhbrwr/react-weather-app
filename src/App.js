import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Omaha" />
        <footer>
          This project was coded by{" "}
          <a 
          href="https://sarahbarelos.com/" 
          target="_blank" 
          rel="noreferrer"
          >
            Sarah
            </a> and is{" "}
          <a
            href="https://github.com/srhbrwr/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

