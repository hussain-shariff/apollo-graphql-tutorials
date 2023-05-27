const { GraphQLID } = require("graphql")
const { ProjectType } = require("../../types/types")
const projectSchema = require("../../models/projectSchema")

const getProject = {
	type: ProjectType,
	args: { id: { type: GraphQLID } },
	resolve(parent, args) {
		return projectSchema.findById(args.id)
	},
}

module.exports = getProject
