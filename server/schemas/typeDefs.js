const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    firstName: String
    lastName: String
  }

  type Suggestion {
    _id: ID
    title: String
    description: String
    suggestedUser: User
    createdAt: String
  }

  type Picture {
    _id: ID
    title: String
    description: String
    createdAt: String
    owner: User
  }

  type Group {
    groupName: String
    destination: String
    users: [User]
    suggestions: [Suggestion]
  }

  type Query {
    users: [User]
    
  }
`;

module.exports = typeDefs;