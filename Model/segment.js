const mongoose = require('mongoose');


const Segment = new mongoose.Schema({
    For: String,
    Seg: [String]
});

// const Location = mongoose.model('Location', location);
const segment = mongoose.model('Segment', Segment);

// segment.create({
//     Segment: ["", "ALS", "CPS","CSUB","CTS","DBM","DCB","FRMS","IDS","IPS","ISM","OF2","OSF","RCU","RDU","RES","SBS","SF2","SIS","SL2","SLR","SMIS","SNB","SNV","SPM","SPMS","TS","WSV"]
// });

module.exports = segment;