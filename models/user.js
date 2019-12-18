const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: String,
    dob: Date,
    address: String,
    description: String,
    createdAt: {type: Date, default: Date.now()}
});
