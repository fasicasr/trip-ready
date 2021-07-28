import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $firstName: String!, $lastName: String!, $password: String!){
      addUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password){
        token
        user {
          _id,
          email,
          firstName,
          lastName
        }
      }
    }
`;

export const UPDATE_USER = gql`
mutation updateUser($userId: ID!, $email: String, $firstName: String, $lastName: String){
    updateUser(userId: $userId, email: $email, firstName: $firstName, lastName: $lastName){
      _id,
      email,
      firstName,
      lastName,
      groups{
        _id,
        groupName
      }
    }
  }
`;

export const DELETE_USER = gql`
mutation deleteUser($email: String!){
    deleteUser(email: $email)
}
`;

export const ADD_GROUP = gql`
mutation addGroup($groupName: String!, $destination: String!, $user_id: [ID]){
    addGroup(groupName: $groupName, destination: $destination, users: $user_id){
      _id,
      groupName,
      destination,
      users{
        _id,
        email
      }
    }
  }
`
export const DELETE_GROUP = gql`
mutation deleteGroup($id: ID!){
    deleteGroup(id: $id )
  }
`;

export const UPDATE_GROUP = gql`
mutation updateGroup($id: ID!, $groupName: String, $destination: String){
    updateGroup(_id: $id, groupName: $groupName, destination: $destination){
      _id,
      groupName,
      destination,
      users{
          _id,
          email
      }
    }
  }
`;

export const ADD_USER_TO_GROUP = gql`
mutation addUserToGroup($groupId: ID!, $userId: ID!){
    addUserToGroup(groupId: $groupId, userId: $userId){
      _id,
      groupName,
      destination,
      users{
        _id
      }
    }
  }
`;

export const ADD_SUGGESTION = gql`
mutation addSuggestion($title: String!, $description: String!, $suggestedUser: ID!, $belongToGroup: ID!){
    addSuggestion(title: $title, description: $description", suggestedUser: $suggestedUser, belongToGroup: $belongToGroup){
      title,
      description,
      createdAt
    }
  }
`;

export const UPDATE_SUGGESTION = gql`
mutation updateSuggestion($id: ID!, $title: String, $description: String){
    updateSuggestion(_id: $id, title: $title, description: $description){
      _id,
      title,
      description,
      createdAt
    }
  }
`;

export const DELETE_SUGGESTION = gql`
mutation deleteSuggestion($id: ID!){
    deleteSuggestion(_id: $id)
  }
`;