const clientSchema = require("../models/clientSchema")

const ProjectClientResolver = async (parent, args) => {
	return await clientSchema.find(parent.clientId)
}

module.exports = ProjectClientResolver
