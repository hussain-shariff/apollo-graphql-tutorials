const projectSchema = require("../../models/projectSchema")

const DeleteProjectResolver = async (parent, args) => {
	return await projectSchema.findByIdAndDelete(args.id)
}

module.exports = DeleteProjectResolver