const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    id:ID!
    userName:String
    email:String
}

type Query {
    queryUsers:[User]
}

type Mutation {
    addUser(userName:String!,email:String!):User
}

`

module.exports = typeDefs;

