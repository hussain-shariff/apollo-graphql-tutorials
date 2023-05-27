const { GraphQLNonNull, GraphQLID } = require("graphql")
const { ProjectType } = require("../../types/types")
const DeleteProjectResolver = require("../../resolvers/project/DeleteProjectResolver")

const deleteProjectMutation = {
	type: ProjectType,
	args: {
		id: { type: new GraphQLNonNull(GraphQLID) },
	},
	resolve: DeleteProjectResolver,
}

module.exports = deleteProjectMutation
