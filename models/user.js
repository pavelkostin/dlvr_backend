const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },

    password: {

    },

    email: {

    }
});

module.exports = mongoose.model('user', userSchema); 