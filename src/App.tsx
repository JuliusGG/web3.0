import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./web/pages/welcome";
import WalletAddress from "./components/WalletAddress";
import { Wallet } from "./interfaces/interfaces";
import WalletDetection from "./components/WalletDectection";

function App() {
  const [userWallet, setUserWallet] = useState<Wallet>({
    address: "Please login to your wallet",
    balance: "0",
    isConnected: false,
  });

  useEffect(() => {
    WalletDetection(setUserWallet);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className={`Nav Eth-balance`}>
          <p className="">{userWallet.balance} eth</p>
        </div>
        <div className={`Nav Eth-wallet`}>
          <WalletAddress
            address={userWallet.address}
            isConnected={userWallet.isConnected}
          />
        </div>
      </header>
      <Welcome message="oh hi mark" />
    </div>
  );
}

export default App;
