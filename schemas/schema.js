const { projects, clients } = require("../sampleData")
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
} = require("graphql")
const jobsModel = require("../models/jobSchema")
const mongoose = require("mongoose")

const JobsType = new GraphQLObjectType({
	name: "Job",
	fields: () => ({
		id: { type: GraphQLID },
		position: { type: GraphQLString },
		company: { type: GraphQLString },
		status: { type: GraphQLString },
		location: { type: GraphQLString },
		jobType: { type: GraphQLString },
		createdBy: { type: GraphQLString },
	}),
})

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
				return clients.find((each) => each.id === parent.clientId)
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
		jobs: {
			type: new GraphQLList(JobsType),
			resolve(parent, args) {
				return jobsModel.find({})
			},
		},
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
})
