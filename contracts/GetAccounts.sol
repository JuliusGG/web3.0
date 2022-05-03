//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract GetAccounts {
  // Emits when update function is called, smart contracts are stored on specific places on the blockchain
  event UpdatedMessages(string[] staleAccounts, string[] refreshedAccounts);

  // This one is public to be used outside of this smart contract
  string[] public accounts;

  // Constructing data for the contract and taking in argument
  constructor(string[] memory init) {
    accounts = init;
  }

  function update(string[] memory refreshedAccounts) public {
    string[] memory staleAccounts = accounts;
    accounts = refreshedAccounts;
    emit UpdatedMessages(staleAccounts, refreshedAccounts);
  }
}
