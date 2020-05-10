# Blockchain Capstone Project - Real Estate MarketPlace

This capstone project builds upon the knowledge gained throughout the course in order to build a decentralized housing product. 

## Versions

Truffle v5.1.24 (core: 5.1.24)

Node v12.16.3

truffle-compiler: 0.5.1+commit.c8a2cb62.Emscripten.clang

ZoKrates 0.5.2

truffle-hdwallet-provider@1.0.17

Compiler: Solidity - 0.5.5 (solc-js)

## Contracts
### Rinkeby Contract Address
First the Verifier contract is deployed, then the SolnSquareVerifier contract using the Verifier address.

Verifier - https://rinkeby.etherscan.io/address/0x91eec087857e2666cD6F77a95214FD1d3B4aF825

SolnSquareVerifier - https://rinkeby.etherscan.io/address/0x00A7E913ab81B528eF99F339816B376b1C5835b0

#### Contract ABI
All contract ABI are in the build folder

OpenSea MarketPlace Storefront
    https://rinkeby.opensea.io/assets/bkhs-erc721mintabletoken-v2

### SolnSquareVerifier.sol

<b>Note</b>: SolnSquareVerifier inherits all other contracts except verifier.sol

Completed contract that inherits the ERC721 token backed through zkSnarks that enhances privacy and scalability.

### verifier.sol

Implements Succinct Zero-knowledge proofs (zkSnarks).

## Quick Start Deploying to Ganache and Testing

1. cd into project repro & install modules
    ```
    cd Blockchain-Capstone-Real-Estate-Marketplace

    npm install
    ```
2. Compile Contracts

        truffle compile

3. Start ganache (CLI or GUI)

        ganache-cli

4. Migrate locally

        ruffle migrate --network development --reset

### Testing contracts

#### Testing ERC721

File: TestERC721Mintable.js

Test minting functionality of tokens and transfer of tokens.

    truffle test ./test/TestERC721Mintable.js

#### Test zkSnarks

File: TestSquareVerifier.js

Verifies zkSnarks is successfully implemented.

    truffle test ./test/TestSquareVerifier.js

#### Testing ERC721 token with zkSnarks

File: TestSolnSquareVerifier.js

Test minting with zkSnarks.

    truffle test ./test/TestSolnSquareVerifier.js

---

## Quick Start Deploying to Rinkeby

1. Make a new project with Infura

    Infura: https://infura.io

2. Setup truffle-config

    2.1 set infuraKey

    2.2 set mnemonic from metamask within HDWalletProvider

    2.3 set rinkeby endpoint within HDWalletProvider

    2.4 set from address

3. Migrate to rinkeby

        truffle migrate --network rinkeby

4. Finding ERC721 token on ether-scan

     https://rinkeby.etherscan.io/token/0x00a7e913ab81b528ef99f339816b376b1c5835b0


5. Minting tokens

    https://www.myetherwallet.com/interface/interact-with-contract

6. Finding tokens on rinkeby OpenSea

    https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/21

7. Viewing token Storefront on Opensea

    https://rinkeby.opensea.io/assets/bkhs-erc721mintabletoken-v2

## assets

https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/21
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/22
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/26
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/20
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/18
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/17
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/14
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/16
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/12
https://rinkeby.opensea.io/assets/0x00a7e913ab81b528ef99f339816b376b1c5835b0/11

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
