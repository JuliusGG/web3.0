import { ethers } from "ethers";
import React from "react";
import "./Components.css";

declare const window: Window &
  typeof globalThis & {
    ethereum: ethers.providers.ExternalProvider;
  };

function WalletAddress(props: { address: string; isConnected: boolean }) {
  // Check if user has Metamask or other Ethereum wallet installed in browser.
  const isWalletInstalled = window.ethereum;
  if (!isWalletInstalled) {
    return (
      <div className="Wallet">
        <p className="Install-wallet">
          No Ethereum wallet detected Please install{" "}
          <a
            href="http://metamask.io"
            target="_blank"
            rel="noopener noreferrer"
            className="Metamask"
            aria-label="No wallet is installed in browser."
          >
            Metamask
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="Wallet">
      <p className={props.isConnected ? "Address" : ""}>{props.address}</p>
    </div>
  );
}

export default WalletAddress;
