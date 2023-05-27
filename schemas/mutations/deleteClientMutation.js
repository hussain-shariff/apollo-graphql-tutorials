const { GraphQLNonNull, GraphQLID } = require("graphql")
const { ClientType } = require("../../types/types")
const DeleteClientResolver = require("../../resolvers/client/DeleteClientResolver")

const deleteCLientMutation = {
    type: ClientType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: DeleteClientResolver,
}

module.exports = deleteCLientMutation