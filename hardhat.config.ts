import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers"
//import "@nomiclabs/hardhat-web3";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import Web3 from "web3";
require("web3-utils");
require("@nomiclabs/hardhat-web3");

dotenv.config();

const { POLYGON_API_URL, PRIVATE_KEY, POLYGON_WEB_SOCKET } = process.env

const web3 = new Web3(POLYGON_WEB_SOCKET || "");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
  return accounts
});

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);
    console.log(web3.utils.fromWei(balance, "ether"), "ETH")
  });

// Exporting a config object
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: POLYGON_API_URL || "",
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
