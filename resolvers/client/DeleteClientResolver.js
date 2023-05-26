const clientModel = require("../../models/clientSchema")

const DeleteClientResolver = async (parent, args) => {
	const Clients = await clientModel.findByIdAndDelete(args.id)
	return Clients
}

module.exports = DeleteClientResolver
