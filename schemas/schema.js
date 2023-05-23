const { projects, clients } = require("../sampleData")
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
} = require("graphql")

const ClientType = new GraphQLObjectType({
	name: "Client",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	}),
})

const projectType = new GraphQLObjectType({
	name: "Project",
	fields: () => ({
		id: { type: GraphQLID },
		clientId: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		status: { type: GraphQLString },
		client: {
			type: ClientType,
			resolve(parent, args) {
				return clients.find(each => each.id === parent.clientId)
			},
		},
	}),
})

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		clients: {
			type: new GraphQLList(ClientType),
			resolve(parent, args) {
				return clients
			},
		},
		client: {
			type: ClientType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return clients.find((each) => each.id === args.id)
			},
		},
		projects: {
			type: new GraphQLList(projectType),
			resolve(parent, args) {
				return projects
			},
		},
		project: {
			type: projectType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return projects.find((each) => each.id === args.id)
			},
		},
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
})
