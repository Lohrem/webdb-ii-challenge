const express = require('express')
const carsRouter = require('./data/cars/carsRouter')
const server = express()

server.use(express.json())

server.use('/api/cars/', carsRouter)

module.exports = server