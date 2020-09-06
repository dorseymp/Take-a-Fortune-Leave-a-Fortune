const mongoose = require('mongoose');

const fortuneSchema = new mongoose.Schema({
    value: String
 }, {
     collection: 'SubmittedFortunes'
 });
 const SubmittedFortune = mongoose.model('SubmittedFortune', fortuneSchema);

module.exports = SubmittedFortune;