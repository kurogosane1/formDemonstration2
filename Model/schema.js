const mongoose  = require('mongoose');

const location = new mongoose.Schema({
    Area: String,
    Geomarket: [],
    Country: []
});



const Location = mongoose.model('Location', location);

// Location.create({Area: "LAM", 
// Geomarket: ["","MCA", "LAS", "LAC", "LAN", "VEN", "CUB"], City: ["MX", "CUB"]});


module.exports = Location;