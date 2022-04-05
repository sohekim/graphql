const {
    graphql,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = require("graphql");

const userData = require("../MOCK_DATA.json");
const UserType = require('./TypeDefs/UserType');

const { mainModule } = require("process");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // equivalent to routes in REST
        // getAllUser, getUserById

        getAllUsers: {
            //   return type
            type: new GraphQLList(UserType),
            //   example to pass in args
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                // connect with database here
                // args.id
                return userData;
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
                ip_address: { type: GraphQLString },
            },
            resolve(parent, args) {

                userData.push({
                    id: 101,
                    first_name: args.firstName,
                    last_name: args.lastName,
                    email: args.email,
                    gender: args.gender,
                    ip_address: args.ip_address,
                });
                return args;
            },
        },
    },
});

// schema = mutation + query
// query - get data
// mutation - update/ create/ delete data
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });