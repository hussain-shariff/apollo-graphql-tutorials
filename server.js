const express = require("express")
const app = express()
require("dotenv").config
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schemas/schema')

const PORT = process.env.PORT || 5000

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : process.env.NODE_ENV === "development"
}))

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
