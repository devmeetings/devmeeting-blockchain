const Web3 = require('web3')

run()

async function run () {
  const web3 = new Web3('http://localhost:8545')

  const accounts = await web3.eth.getAccounts();
  const from = accounts[0];
  const to = from;
  const value = 50000;

  try {
    const txHash = await web3.eth.sendTransaction({
      from, to, value
    })
    console.log(`Transaction sent with hash: ${txHash}`)
  } catch (e) {
    console.error(`Could not send transaction: ${e}`)
  }
}
