const clientModel = require("../../models/clientSchema")

const ClientsResolver = async (parent, args) => {
	const Clients = await clientModel.find({})
	return Clients
}

module.exports = ClientsResolver
