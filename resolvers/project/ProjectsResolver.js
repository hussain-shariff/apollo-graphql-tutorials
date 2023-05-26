const projectModel = require("../../models/projectSchema")

const ProjectsResolver = async (parent, args) => {
	const Projects = await projectModel.find({})
	return Projects
}

module.exports = ProjectsResolver
