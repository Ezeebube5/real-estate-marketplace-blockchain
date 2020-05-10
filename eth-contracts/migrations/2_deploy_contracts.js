// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var verifier = artifacts.require('./Verifier.sol');

module.exports = async function(deployer) {
  await deployer.deploy(verifier);
  await deployer.deploy(SolnSquareVerifier, verifier.address, "BKHS_ERC721MintableToken", "BKHS");
};
