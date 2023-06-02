const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
        password: String!
    }

    type Review {
        _id: ID!
        name: String!
        rating: Int!
        comment: String!
    }

    type Schedule {
        _id: ID!
        name: String!
        email: String!
        phone: String!
        date: String!
        time: String!
        car: String!
        service: String!
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        reviews: [Review]
        schedules: [Schedule]
        user(_id: ID!): User
    }

    type Mutation {
        addReview(name: String!, rating: Int!, comment: String!): Review
        createSchedule(name: String!, email: String!, phone: String!, date: String!, time: String!, car: String!, service: String!): Schedule
        createUser(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(_id: ID!, email: String!, password: String!): User
        removeUser(_id: ID!): User
    }
`;

module.exports = typeDefs;