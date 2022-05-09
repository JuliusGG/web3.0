import { ethers } from "ethers";
import React from "react";
import { Wallet } from "../interfaces/interfaces";
import "./Components.css";

declare const window: Window &
  typeof globalThis & {
    ethereum: ethers.providers.ExternalProvider;
  };

function WalletDetection(
  setUserWallet: React.Dispatch<React.SetStateAction<Wallet>>
) {
  // Check if user has Metamask or other Ethereum wallet installed in browser.
  if (window.ethereum === undefined) {
    return;
  }

  async function signMetamaskConnection() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const signerBalance = await signer.getBalance();
    const balance = ethers.utils.formatEther(signerBalance);
    setUserWallet({ address, balance });
  }

  try {
    signMetamaskConnection();
  } catch (e) {
    setUserWallet({ address: "Error connecting the wallet.", balance: "0" });
  }
}

export default WalletDetection;
