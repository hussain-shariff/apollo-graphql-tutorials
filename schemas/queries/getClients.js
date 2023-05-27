const { GraphQLList } = require("graphql")
const { ClientType } = require("../../types/types")
const ClientsResolver = require("../../resolvers/client/ClientsResolver")

const getClients = {
	type: new GraphQLList(ClientType),
	resolve: ClientsResolver,
}

module.exports = getClients
