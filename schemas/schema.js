const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
} = require("graphql")
const jobsModel = require("../models/jobSchema")
const mongoose = require("mongoose")
const {
	JobsType,
	UserType,
	LoginType,
} = require("../types/types")
const LoginResolver = require('../resolvers/LoginResolver')

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		jobs: {
			type: new GraphQLList(JobsType),
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
			resolve : LoginResolver
		},
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
})
