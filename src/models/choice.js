const mongoose = require('mongoose')
const validator = require('validator')

const choices = new mongoose.Schema({
    dealerid: {
        type: String,
        trim: true
    },
    dealername : {
        type: String,
        trim: true
    },
    dealercity:{
        type: String,
        trim: true
    },
    dealerphone: {
        type: Number,
        trim: true
    },
    storeid : {
        type: String,
        trim : true
    },
    storename:{
        type: String,
        trim: true
    },
    storeemail:{
        type: String,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email!')
            }
        }
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})


const Choice = mongoose.model('Choice', choices)

module.exports = Choice