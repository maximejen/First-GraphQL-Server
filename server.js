var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(
    `
    type Query {
	hello: String
	salut: String
    }
    `
);

var root = {
    hello: () => 'Hello world!',
    salut: () => 'Salut le monde!'
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(40000, () => console.log('Now browse to localhost:40000/graphql'));
