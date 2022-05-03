import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./web/pages/welcome";
import WalletDetection from "./components/WalletDectection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Flex-stretch">a fact</p>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Flex-stretch">
          <WalletDetection />
        </div>
      </header>
      <Welcome message="oh hi mark" />
    </div>
  );
}

export default App;
