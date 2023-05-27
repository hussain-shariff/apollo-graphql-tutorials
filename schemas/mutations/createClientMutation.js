const { GraphQLNonNull, GraphQLString } = require("graphql")
const { ClientType } = require("../../types/types")
const CreateClientResolver = require("../../resolvers/client/CreateCLientResolver")

const createCLientMutation = {
	type: ClientType,
	args: {
		name: { type: new GraphQLNonNull(GraphQLString) },
		email: { type: new GraphQLNonNull(GraphQLString) },
		phone: { type: new GraphQLNonNull(GraphQLString) },
	},
	resolve: CreateClientResolver,
}

module.exports = createCLientMutation
