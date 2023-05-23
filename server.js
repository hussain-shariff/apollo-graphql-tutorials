const express = require("express")
const app = express()
require("dotenv").config()
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schemas/schema")
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV,
	})
)

app.get("/", (req, res) => {
	res.send("hello world")
})

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(PORT, () => console.log(`server running on port ${PORT}`))
	} catch (err) {
		console.log(err)
	}
}

start()
