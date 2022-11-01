const express = require('express')
const data = require('./dummy')

const api = express()

const HOST = "localhost"


api.get('/',(req,res) => {
    res.send('Hi')
})

api.get('/info', (req,res) => {
    res.status(200).json(data)
})


api.listen(11008, () => {
    console.log('API running on port 11008');}) ;

const PORT = process.env.PORT || 11088;
api.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

