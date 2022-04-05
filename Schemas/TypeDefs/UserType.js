const {
    graphql,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = require("graphql");


// type defintion - Data model
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        // columns for user type
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ip_address: { type: GraphQLString },
    }),
});

module.exports = UserType;