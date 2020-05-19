const express = require('express')
const Dealer = require('../models/dealers')
const router = new express.Router()

router.post('/dealers', async (req, res) => {
    const dealer = new Dealer(req.body)

    try {
        await dealer.save()
        res.status(201).send(dealer)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/dealers', async (req, res) => {
    try{
        const dealers = await Dealer.find({})
        res.send(dealers)
    } catch(e){
        res.status(500).send(e)
    }
})

module.exports = router
