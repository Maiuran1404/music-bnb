const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstrumentSchema = new Schema({
    instrument: String, 
    owner: String,
    address: String,
    email: String,
    price: Number,
    total_price: Number,
    date: {
        type: String,
        default: new Date().toISOString()
    },
    gummibears: Boolean,
    soloroom: Boolean
});

const Instrument = mongoose.model('Instrument', InstrumentSchema);
module.exports = Instrument;
