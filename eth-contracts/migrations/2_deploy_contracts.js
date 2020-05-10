// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Verifier = artifacts.require('Verifier.sol');

module.exports = async function(deployer) {
  await deployer.deploy(Verifier);
  await deployer.deploy(SolnSquareVerifier, Verifier.address, "BKHS_ERC721MintableToken", "BKHS");

//   deployer.deploy(Verifier).then(() => {
//     return deployer.deploy(SolnSquareVerifier, Verifier.address, "BKHS_ERC721MintableToken", "BKHS"
//     ).then(() => {
//         let config = {
//             localhost: {
//                 url: 'http://localhost:8545',
//                 Verifier: Verifier.address,
//                 SolnSquareVerifier: SolnSquareVerifier.address
//             }
//         };
//         fs.writeFileSync(__dirname + '/../config.json', JSON.stringify(config, null, '\t'), 'utf-8');
//     });
// });

};
