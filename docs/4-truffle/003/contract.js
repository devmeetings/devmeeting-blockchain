const Web3 = require('web3')
const abi = require('./lock.abi.json')
const contractAddress = '0x731a10897d267e19B34503aD902d0A29173Ba4B1'

module.export = class Contract {
  web3 = new Web3('http://localhost:8545')
  contract = new this.web3.eth.Contract(abi, contractAddress)

  // 3/ Zwracamy aktualnego ownera kontraktu
  async getOwner () {
    return await this.contract.methods.owner().call()
  }

  // 3/ Oraz zwraamy jak dużo jest już zablokowane
  async getLocked () {
    return await this.contract.methods.locked(await this.account()).call()
  }

  async account () {
    return await this.web3.eth.getAccounts()[0]
  }

  async lockOneEther() {
    // 4/ Wysyłamy transakcję
    const promiEvent = this.contract.methods.lock().send({
      from: await this.account(),
      value: web3.utils.toWei('1', 'ether')
    })

    return new Promise((resolve, reject) => {
      // 2/ Odrzuć Promise jeżeli wystąpi jakiś błąd.
      promiEvent.catch(reject)
      promiEvent.on('error', reject)

      // 5/ I rozwiąż poprawnie po 3 potwierdzeniach.
      promiEvent.on('confirmation', async (confirmation) => {
        if (confirmation > 3) {
          resolve(await promiEvent)
        }
      })
    })
  }
}
