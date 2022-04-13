// Solidity version
pragma solidity >=0.8.9;

// Define a new contract
contract HelloWorld {
  // Emits when update function is called, smart contracts are stored on specific places on the blockchain
  event UpdatedMessages(string oldStr, string newStr);

  // Declaring a state variable message, type string. This one is public to be used outside of this smart contract
  string public message;

  // Constructing data for the contract and taking in a string argument
  constructor(string memory initMessage) {
    message = initMessage;
  }

  // public function that accepts a new message and updates the old.
  function update(string memory newMessage) public {
    string memory oldMsg = message;
    message = newMessage;
    emit UpdatedMessages(oldMsg, newMessage);
  }
}