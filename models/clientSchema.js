const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema(
	{
		name: String,
		eamil: String,
		phone: String,
	},
	{ timestamps: true }
)

module.exports = mongoose.model("clients", clientSchema)
