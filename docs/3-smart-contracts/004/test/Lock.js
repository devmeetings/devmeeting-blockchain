// Importujemy kontrakt do testów za pomocą artifacts.require
const Lock = artifacts.require('./Lock.sol')

// 8/ Piszemy prosty test dla kontraktu
contract('Lock', accounts => {
  it('should return an owner', async () => {
    const instance = await Lock.deployed()
    const owner = await instance.owner.call()

    assert.equal(owner, accounts[0])
  })
})
