var Safemath = artifacts.require("./Safemath.sol");
var ERC20Transfer = artifacts.require("./ERC20Transfer.sol");
var ERC20 = artifacts.require("./ERC20.sol");
// var ERC20God = artifacts.require("./ERC20God.sol");

// module.exports = async function(deployer) {
//   await deployer.deploy(Safemath);
//   await deployer.link(Safemath, [ERC20Transfer, ERC20]);

//   await deployer.deploy(ERC20Transfer);
//   await deployer.link(ERC20Transfer, ERC20);

//   await deployer.deploy(ERC20);
//   // await deployer.deploy(ERC20God);


// };


module.exports = function (deployer) {
    deployer.deploy(Safemath);
    deployer.link(Safemath, [ERC20Transfer, ERC20]);

    deployer.deploy(ERC20Transfer);
    deployer.link(ERC20Transfer, ERC20);

    deployer.deploy(ERC20, "NAME", "SML", 0, 1000);
};
