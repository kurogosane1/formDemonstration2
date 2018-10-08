const mongoose = require('mongoose');
mongoose.set('debug', true);
var segment = ('./user.js');
var Location = ('./schema.js');
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true});

mongoose.Promise = Promise;


// module.exports = schemas;
module.exports.Location = require('./schema.js');
module.exports.segment = require('./segment.js');
