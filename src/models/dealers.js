const mongoose = require('mongoose')
const express = require('express')
const router = new express.Router()

const dealers = new mongoose.Schema({
    dealername : {
        type: String,
        required : true,
        trim : true
    },
    dealercity : {
        type: String,
        trim: true
    },
    dealerphone: {
        type: Number
    }

})

const Dealers = mongoose.model('Dealer',dealers) 

module.exports = Dealers