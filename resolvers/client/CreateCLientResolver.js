const clientSchema = require("../../models/clientSchema")

const CreateClientResolver = async (parent, args) => {
	return await clientSchema.create({ ...args })
}

module.exports = CreateClientResolver
