const authModel = require("../models/userSchema")

const RegisterResolver = async (parent, args) => {
	const user = await authModel.findOne({ email: args.email })
	if (user) {
		return { error: "Email already exists." }
	} else {
		const user = await authModel.create({ ...args })
		const token = user.createJWT()
		return { user: user.username, token }
	}
}

module.exports = RegisterResolver
