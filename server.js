const express = require("express")
const app = express()
require("dotenv").config

const PORT = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
