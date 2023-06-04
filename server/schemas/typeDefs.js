const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String!
        password: String!
    }

    type Review {
        _id: ID!
        name: String!
        comment: String!
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        reviews: [Review]
        users: [User]
    }

    type Mutation {
        addReview(name: String!, comment: String!): Review
        createUser(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(_id: ID!, email: String!, password: String!): User
        removeUser(_id: ID!): User
    }
`;

module.exports = typeDefs;