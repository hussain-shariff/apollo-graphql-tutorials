const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLSchema,
	GraphQLList,
	GraphQLString,
	GraphQLID,
} = require("graphql")
const mongoose = require("mongoose")
const { ProjectType, ClientType } = require("../types/types")
const ClientsResolver = require("../resolvers/ClientsResolver")
const ProjectsResolver = require("../resolvers/ProjectsResolver")
const CreateClientResolver = require("../resolvers/CreateCLientResolver")
const clientSchema = require("../models/clientSchema")
const projectSchema = require("../models/projectSchema")

// Queries
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		clients: {
			type: new GraphQLList(ClientType),
			resolve: ClientsResolver,
		},
		client: {
			type: ClientType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return clientSchema.findById(args.id)
			},
		},
		projects: {
			type: new GraphQLList(ProjectType),
			resolve: ProjectsResolver,
		},
		project: {
			type: ProjectType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return projectSchema.findById(args.id)
			},
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
		createProject: {
			type: ProjectType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				description: { type: new GraphQLNonNull(GraphQLString) },
				status: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve: CreateClientResolver,
		},
	},
})
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation,
})
