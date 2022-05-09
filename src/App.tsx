import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./web/pages/welcome";
import WalletAddress from "./components/WalletAddress";
import { Wallet } from "./interfaces/interfaces";
import WalletDetection from "./components/WalletDectection";

function App() {
  const [userWallet, setUserWallet] = useState<Wallet>({
    address: "Please login to your wallet.",
    balance: "0",
  });

  useEffect(() => {
    WalletDetection(setUserWallet);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p className="Flex-stretch">{userWallet.balance} eth</p>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Flex-stretch">
          <WalletAddress address={userWallet.address} />
        </div>
      </header>
      <Welcome message="oh hi mark" />
    </div>
  );
}

export default App;
