import { ethers } from "ethers";
import React from "react";
import "./Components.css";

declare const window: Window &
  typeof globalThis & {
    ethereum: ethers.providers.ExternalProvider;
  };

function WalletAddress(props: { address: string }) {
  // Check if user has Metamask or other Ethereum wallet installed in browser.
  if (window.ethereum === undefined) {
    return (
      <>
        <p className="Install-wallet">
          No Ethereum wallet detected - Please install{" "}
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
      </>
    );
  }

  return <div className="Address">{props.address}</div>;
}

export default WalletAddress;
