const { GraphQLList, GraphQLID } = require("graphql")
const { ProjectType } = require("../../types/types")
const ProjectsResolver = require("../../resolvers/project/ProjectsResolver")

const getProjects = {
	type: new GraphQLList(ProjectType),
	resolve: ProjectsResolver,
}

module.exports = getProjects
