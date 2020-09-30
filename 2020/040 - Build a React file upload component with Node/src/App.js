import React from 'react';
import FileUpload from "./FileUpload";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
