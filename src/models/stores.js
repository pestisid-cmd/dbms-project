const mongoose = require('mongoose')
const validator = require('validator')

const stores = new mongoose.Schema({
    storename : {
        type: String,
        required : true,
        trim : true
    },
    storecity : {
        type: String,
        trim: true
    },
    storephone: {
        type: Number
    },
    storeemail:{
        type: String,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email!')
            }
        }
    }

})

const Stores = mongoose.model('Store',stores) 

module.exports = Stores