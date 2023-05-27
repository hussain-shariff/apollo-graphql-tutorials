const { GraphQLObjectType, GraphQLSchema } = require("graphql")
const createCLientMutation = require("./mutations/createClientMutation")
const deleteCLientMutation = require("./mutations/deleteClientMutation")
const createProjectMutation = require("./mutations/createProjectMutation")
const deleteProjectMutation = require("./mutations/deleteProjectMutation")
const getClients = require("./queries/getClients")
const getClient = require("./queries/getClient")
const getProjects = require("./queries/getProjects")
const getProject = require("./queries/getProject")

// Queries
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		clients: getClients,
		client: getClient,
		projects: getProjects,
		project: getProject,
	},
})

// mutations
const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		createClient: createCLientMutation,
		deleteClient: deleteCLientMutation,
		createProject: createProjectMutation,
		deleteProject: deleteProjectMutation,
	},
})
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation,
})
