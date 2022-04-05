const express = require("express");
const app = express();

const { graphqlHTTP } = require("express-graphql");
const PORT = 4040;

const schema = require('./Schemas');

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => console.log(`server running at ${PORT}`));