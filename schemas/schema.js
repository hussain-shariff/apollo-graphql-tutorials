const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLNonNull,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
} = require("graphql")
const jobsModel = require("../models/jobSchema")
const mongoose = require("mongoose")
const { JobsType, UserType, LoginType } = require("../types/types")
const LoginResolver = require("../resolvers/LoginResolver")
const RegisterResolver = require("../resolvers/RegisterResolver")

// Queries
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		getALlJobs: {
			type: new GraphQLList(JobsType),
			args : {
				token : {type: GraphQLString}
			},
			resolve(parent, args) {
				return jobsModel.find({})
			},
		},
		login: {
			type: LoginType,
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString },
			},
			resolve: LoginResolver,
		},
	},
})

// mutations
const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		register: {
			type: LoginType,
			args: {
				username: { type: GraphQLNonNull(GraphQLString) },
				email: { type: GraphQLNonNull(GraphQLString) },
				password: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve: RegisterResolver,
		},
	},
})
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation
})
