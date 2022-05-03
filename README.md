# To start on localhost
npm run start

# To build
npm run build

# To run the web3 
Hardhat is used for the web3 integration.
First you need a .env file at the root, you will need these three secret variables: POLYGON_API_URL, PRIVATE_KEY, POLYGON_WEB_SOCKET
You can set up your own account at https://dashboard.alchemyapi.io and try it out, you will also need an online wallet(the PRIVATE_KEY) that can connect to the mumbai polygon test chain https://docs.polygon.technology/docs/develop/alchemy/

To play with the data on the mumbai chain that you have, first compile the hardhat and then run the localhost node.
```shell
npx hardhat compile
npx hardhat node
```


There you have your own web3 api running. From there in another shell you can type 
npx hardhat accounts to see the list of addresses connected to your test chain.
npx hardhat balance --account <PARAMETER - a wallet address 0x...>
then the task will get information on the chain and print out the etherum balance on that address.

Some commands will require the flag "--network localhost".
For example, npx hardhat accounts will print out your wallet address.
However, npx hardhat accounts --network localhost will print out all wallet addresses on the chain - coming from the hardhat node mentioned previously.

# Creating contracts
After creating a contract you need to:
npx hardhat compile
add your contract into scripts/deploy.ts and then run
npx hardhat run --network localhost scripts/deploy.ts

# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

# TO-DO
Seperate tasks from hardhat config.