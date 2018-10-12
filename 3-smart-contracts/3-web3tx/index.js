const Web3 = require('web3')
// 2/ Wczytujemy ABI i adres kontraktu
const abi = require('./lock.abi.json')
const contractAddress = '0x731a10897d267e19B34503aD902d0A29173Ba4B1'

run()

async function run () {
  const web3 = new Web3('http://localhost:8545')

  const contract = new web3.eth.Contract(abi, contractAddress)

  // 3/ Wywołujemy metodę lock, ale tym razem korzystając z `send`
  const promiEvent = contract.methods.lock().send({
    from: (await web3.eth.getAccounts())[0],
    value: web3.utils.toWei('5', 'ether')
  })

  // 3/ Zapisujemy się na potwierdzenia (uwaga na web3)
  promiEvent.on('confirmation', (confirmationNumber, receipt) => {
    console.log(`Confirmed: ${confirmationNumber}`)
  })

  // 2/ I czekamy na hash
  const hash = await promiEvent;
  console.log(`Got hash: ${hash}`)
}
