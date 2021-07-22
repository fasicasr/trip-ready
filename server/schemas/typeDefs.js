const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String
    firstName: String
    lastName: String
  }

  type Suggestion {
    _id: ID!
    title: String
    description: String
    suggestedUser: User
    createdAt: String
  }

  type Picture {
    _id: ID!
    title: String
    description: String
    createdAt: String
    ownerName: String
  }

  type Group {
    _id: ID!
    groupName: String
    destination: String
    users: [User]
    suggestions: [Suggestion]
  }

  type Query {
    users: [User]
    user(email: String!): User
    pictures: [Picture]
    picture(_id: String!): Picture
  }

  type Mutation {
    addUser(email: String!, firstName: String!, lastName: String!): User
    updateUser(userId: ID!, email: String, firstName: String, lastName: String): User
    deleteUser(email: String!): String
    addPicture(title: String!, description: String, ownerName: String): Picture
    updatePicture(_id: ID!, title: String, description: String, ownerName: String): Picture
  }
`;

module.exports = typeDefs;