import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import "./Components.css";

declare const window: Window &
  typeof globalThis & {
    ethereum: ethers.providers.ExternalProvider;
  };

interface Wallet {
  address: string;
}

function WalletDetection() {
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
  const [signedWallet, setSignedWallet] = useState<Wallet | null>({
    address: "Please login to your wallet.",
  });
  async function signMetamaskConnection() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setSignedWallet({ address });
  }
  // TODO: Refactor the try catch.
  try {
    signMetamaskConnection();
  } catch (e) {
    console.log(e);
    setSignedWallet({ address: "Error connecting the wallet." });
    return (
      <>
        <p className="Install-wallet">{signedWallet?.address}</p>
      </>
    );
  }

  return (
    <>
      <div className="Address">{signedWallet?.address}</div>
    </>
  );
}

export default WalletDetection;
