const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
	name: String,
	description: String,
	status: {
		type: String,
		enum: ["Not started", "In-progress", "Completed"],
	},
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "clients",
	},
})

module.exports = mongoose.model("projects", projectSchema)
