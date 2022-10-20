const _deploy_contracts = require("../migrations/2_deploy_contracts");

const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", accounts => {
    it("Should store the value 89", async () => {
        const simpleStorage = await SimpleStorage.deployed();

        await simpleStorage.set(89, {from: accounts[0]});

        const expected = 89;

        const storedData = await simpleStorage.get.call();

        assert.equal(storedData, expected, "The value 89 was not stored");
    });
});
