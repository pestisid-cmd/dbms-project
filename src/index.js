const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const dealerRouter = require('./routers/dealers')
const storeRouter = require('./routers/stores')
const choiceRouter = require('./routers/choice')

const app = express()
const port = process.env.PORT||3000

app.use(express.json())
app.use(userRouter)
app.use(dealerRouter)
app.use(storeRouter)
app.use(choiceRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})