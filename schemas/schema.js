const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLSchema,
	GraphQLList,
	GraphQLString,
} = require("graphql")
const mongoose = require("mongoose")
const { ProjectType, ClientType } = require("../types/types")
const ClientsResolver = require("../resolvers/ClientsResolver")
const ProjectsResolver = require("../resolvers/ProjectsResolver")
const CreateClientResolver = require("../resolvers/CreateCLientResolver")

// Queries
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		clients: {
			type: new GraphQLList(ClientType),
			resolve: ClientsResolver,
		},
		projects: {
			type: new GraphQLList(ProjectType),
			resolve: ProjectsResolver,
		},
	},
})

// mutations
const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		createClient: {
			type: ClientType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				phone: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve: CreateClientResolver,
		},
	},
})
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation,
})
