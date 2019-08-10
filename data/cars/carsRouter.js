const express = require('express')
const db = require('../dbConfig.js');
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const cars = await db('Cars')
    res.status(201).json(cars)
  } catch (err) {
    res.status(500).json({
      message: 'Could not retrive DB cars',
      err
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const carData = req.body
    const newEntry = await db('cars').insert(carData)
    res.status(201).json(newEntry)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Error adding car"
    })
  }
})

module.exports = router