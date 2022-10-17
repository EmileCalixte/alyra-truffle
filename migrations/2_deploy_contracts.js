// Import SimlpeStorage contract
const SimlpeStorage = artifacts.require("SimpleStorage");

module.exports = (deployer) => {
    deployer.deploy(SimlpeStorage);
}
