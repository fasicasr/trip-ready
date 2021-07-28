const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String
    firstName: String
    lastName: String
    groups: [Group]
  }

  type Suggestion {
    _id: ID!
    title: String
    description: String
    suggestedUser: User
    belongToGroup: Group
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
    groups: [Group]
    group(_id: ID!): Group
    suggestions(belongToGroup: ID!): [Suggestion]
    allSuggestions: [Suggestion]
    pictures: [Picture]
    picture(_id: String!): Picture
  }
  
  type Mutation {
    addUser(email: String!, firstName: String!, lastName: String!): User
    updateUser(userId: ID!, email: String, firstName: String, lastName: String): User
    deleteUser(email: String!): String
    addGroup(groupName: String!, destination: String!, users: [ID] ): Group
    updateGroup(_id: ID!, groupName: String, destination: String ): Group
    addUserToGroup(groupId: ID!, userId: ID!): Group
    addSuggestion(title: String!, description: String! suggestedUser: ID!, belongToGroup: ID!): Suggestion
    updateSuggestion(_id: ID!, title: String, description: String): Suggestion
    deleteGroup(id: ID!): String
    deleteSuggestion(_id: ID!): String
    addPicture(title: String!, description: String, ownerName: String): Picture
    updatePicture(_id: ID!, title: String, description: String, ownerName: String): Picture
  }
`;

module.exports = typeDefs;