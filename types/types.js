const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql")

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

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: { type: GraphQLID },
		username: { type: GraphQLString },
		lastname: { type: GraphQLString },
		password: { type: GraphQLString },
		email: { type: GraphQLString },
		location: { type: GraphQLString },
	}),
})

const LoginType = new GraphQLObjectType({
	name: "Login",
	fields: () => ({
		user: { type: GraphQLString },
		token: { type: GraphQLString },
		error: { type: GraphQLString },
	}),
})

module.exports = { LoginType, UserType, JobsType }
