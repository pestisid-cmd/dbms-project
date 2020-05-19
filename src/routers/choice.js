const Choice = require('../models/choice')
const express = require('express')
const Dealer = require('../models/dealers')
const Store = require('../models/stores')
const auth = require('../middleware/auth')
const router = new express.Router()


router.post('/choices/dealer', auth, async (req, res) => {
    // const _id = req.params.id
    // const dealer = await Dealer.findById(_id)
    const choice = new Choice({
        ...req.body,
        owner : req.user._id
    })
    try {
        await choice.save()
        res.status(201).send(choice)
        
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/choices/store', auth, async (req, res) => {
    // const _id = req.params.id
    // const dealer = await Dealer.findById(_id)
    const choice = new Choice({
        ...req.body,
        owner : req.user._id
    })
    try {
        await choice.save()
        res.status(201).send(choice)
        
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/choices', auth, async(req, res) => {
    try{
        const choices = await Choice.find({ owner: req.user._id})
        
        if(!choices){
            return res.status(404).send()
        }
        res.send(choices)
    } catch(e){
        res.status(500).send()
    }
})

router.delete('/choices/:id', auth, async (req, res) => {
    const choice = await Choice.findOneAndDelete({_id: req.params.id, owner: req.user._id})
    try{
        if(!choice){
            res.status(404).send()
        }
        res.send(choice)

    } catch(e){
        res.status(400).send()
    }
})

module.exports = router