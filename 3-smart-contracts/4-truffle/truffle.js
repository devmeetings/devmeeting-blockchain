module.exports = {
  //- See <http://truffleframework.com/docs/advanced/configuration>
  //- to customize your Truffle configuration!
  
  // 7/ Konfigurujemy środowisko developerskie z Ganache.
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: ''
    }
  }
};
