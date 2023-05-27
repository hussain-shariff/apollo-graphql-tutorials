const {
	GraphQLNonNull,
	GraphQLString,
	GraphQLEnumType,
	GraphQLID,
} = require("graphql")
const { ProjectType } = require("../../types/types")
const CreateProjectResolver = require("../../resolvers/project/CreateProjectResolver")

const createProjectMutation = {
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
}

module.exports = createProjectMutation
