const Web3 = require('web3')
// 2/ Wczytujemy ABI i adres kontraktu
const abi = require('./lock.abi.json')
const contractAddress = '0x731a10897d267e19B34503aD902d0A29173Ba4B1'

run()

async function run () {
  const web3 = new Web3('http://localhost:8545')

  // Tworzymy nową instancję kontraktu na podstawie ABI i adresu
  const contract = new web3.eth.Contract(abi, contractAddress)

  // 2/ Wywołujemy metodę `owner()` żeby odczytać stan kontraktu.
  const contractOwner = await contract.methods.owner().call()
  console.log(contractOwner)

  // 2/ Tak samo możemy wywołać getter dla `locked`
  const balance = await contract.methods.locked(contractOwner).call()
  console.log(balance)
}
