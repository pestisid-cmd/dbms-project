const express = require('express')
const Store = require('../models/stores')
const router = new express.Router()

router.post('/stores', async (req, res) => {
    const store = new Store(req.body)

    try {
        await store.save()
        res.status(201).send(store)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/stores', async (req, res) => {
    try{
        const stores = await Store.find({})
        res.send(stores)
    } catch(e){
        res.status(500).send(e)
    }
})

module.exports = router
