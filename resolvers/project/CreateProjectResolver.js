const projectSchema = require("../../models/projectSchema")

const CreateProjectResolver = async (parent, args) => {
	return await projectSchema.create({ ...args })
}

module.exports = CreateProjectResolver
