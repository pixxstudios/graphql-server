const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: BookType,
        args: {
            id: { type: GraphQLString }
        },
        resolve(parents, args) {
            // code to get data from db
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});