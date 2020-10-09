import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Poll from "./components/Poll";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Poll />
      </header>
    </div>
  );
}

export default App;
