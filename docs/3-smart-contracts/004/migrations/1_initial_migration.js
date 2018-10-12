var Migrations = artifacts.require("./Migrations.sol");
// Dodajemy deployment kontraktu w migrations
var Lock = artifacts.require('./Lock.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  // Tutaj deployujemy nasz kontrakt.
  deployer.deploy(Lock);
};
