const authModel = require("../models/userSchema")

const LoginResolver = async(parent, args) => {
    const user = await authModel.findOne({ email: args.email })
    if (!user) {
        return { error: "Invalid Credentials." }
    } else {
        const checkPassword = await user.comparePasswords(args.password)
        if (!checkPassword) {
            return { error: "Invalid Credentials." }
        } else {
            const token = user.createJWT()
            return { user: user.username, token }
        }
    }
}

module.exports = LoginResolver