const express = require('express')
// logike związaną z kontraktami przenosimy do osobnego pliku
const Contract = require('./contract')

// 2/ Tworzymy nowy serwer za pomocą express
const app = express()
const contract = new Contract()


// 11/ Definiujemy metody, które serwer będzie obsługiwal.
app.get('/owner', withError(async (req, res) => {
  res.send(await contract.getOwner())
}))

app.get('/locked', withError(async (req, res) => {
  res.send(await contract.getLocked())
}))

app.post('/lock', withError(async (req, res) => {
  res.send(await contract.lockOneEther())
}))

function withError(f) {
  return (req, res) => {
    f(req, res)
      .catch((err) => {
        console.error(err)
        res.status(500).send(err.message)
      })
  };
}

// 5/ Startujemy serwer na porcie 3000
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
