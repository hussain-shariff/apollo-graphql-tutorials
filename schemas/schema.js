const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLSchema,
	GraphQLList,
	GraphQLString,
	GraphQLID,
	GraphQLEnumType,
} = require("graphql")
const mongoose = require("mongoose")
const { ProjectType, ClientType } = require("../types/types")
const ClientsResolver = require("../resolvers/client/ClientsResolver")
const ProjectsResolver = require("../resolvers/project/ProjectsResolver")
const CreateClientResolver = require("../resolvers/client/CreateCLientResolver")
const clientSchema = require("../models/clientSchema")
const projectSchema = require("../models/projectSchema")
const CreateProjectResolver = require("../resolvers/project/CreateProjectResolver")
const DeleteClientResolver = require("../resolvers/client/DeleteClientResolver")

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
		deleteClient: {
			type: ClientType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: DeleteClientResolver,
		},
		createProject: {
			type: ProjectType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				description: { type: new GraphQLNonNull(GraphQLString) },
				status: {
					type: new GraphQLEnumType({
						name: "ProjectStatus",
						values: {
							new: { value: "Not started" },
							progress: { value: "In-progress" },
							completed: { value: "Completed" },
						},
					}),
					defaultValue: "Not Started",
				},
				clientId: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: CreateProjectResolver,
		},
		deleteProject: {
			type: ProjectType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: DeleteClientResolver,
		},
	},
})
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation,
})
// "Not started", "In-progess", "Completed"
