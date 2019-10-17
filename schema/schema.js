const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLSchema } = graphql;
const _ = require('lodash');

const books = [
    {
        name: "book 1", id: "1"
    }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLID },
        genre: { type: GraphQLID }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type:BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parents, args) {
                // code to get data from db
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});