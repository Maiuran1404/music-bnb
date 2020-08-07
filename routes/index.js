const express = require('express');
const router = express.Router();
const Instrument = require('../models/Instrument');

//Get all instruments
router.get('/api/', (req, res) => {

    Instrument.find({}).sort( { date: -1 })
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((err) => {
            console.log('error: ', err)
        })
});

//Get specific instrument
router.get('/api/:id', (req, res) => {

    const id = req.params.id;

    Instrument.find({ _id: id })
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((err) => {
            console.log('error: ', err)
        })
})

router.post('/api/add', (req, res) => {
    console.log('Body: ', req.body)
    const data = req.body;

    const newInstrument = new Instrument(data);
    newInstrument.save();
    res.json({
        msg: "we received your data"
    })
});

module.exports = router;