const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneno: {
        type: String,
        require: true
    },
    msg: {
        type: String
    }
})


const User = new mongoose.model('User', userSchema)

module.exports = User