const { GraphQLList, GraphQLID } = require("graphql")
const { ClientType } = require("../../types/types")
const clientSchema = require("../../models/clientSchema")

const getClient = {
	type: ClientType,
	args: { id: { type: GraphQLID } },
	resolve(parent, args) {
		return clientSchema.findById(args.id)
	},
}

module.exports = getClient
