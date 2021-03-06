// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy("Hello, big wide world!");

  const GetAccounts = await ethers.getContractFactory("GetAccounts");
  const getAccounts = await GetAccounts.deploy(["0x1234567890", "0x0987654321"]);

  await greeter.deployed();
  await helloWorld.deployed();
  await getAccounts.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("HelloWorld contract deployed to address: ", helloWorld.address);
  console.log('get accounts contract was deployed to address: ', getAccounts.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
