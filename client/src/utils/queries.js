import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users{
    users{
      _id,
      firstName,
      lastName,
      email,
      groups{
        _id
        groupName
      }
    }
  }
`;

export const QUERY_USER = gql`
query user($email: String!){
    user(email: $email){
      _id,
      firstName,
      lastName,
      groups{
        _id,
        groupName
      }
    }
  }
`;

export const QUERY_GROUPS = gql`
query groups{
    groups{
     _id
     groupName,
     destination,
     users{
        _id,
        email
     },
     suggestions{
        _id,
       title
     }
   }
 }
`;

export const QUERY_GROUP = gql`
query group($id: ID!){
    group(_id: $id){
      _id
      groupName,
      destination,
      users{
        _id,
        email
      },
      suggestions{
        _id,
        title,
        description
      }
    }
  }
`;

export const QUERY_SUGGESTIONS = gql`
query allSuggestions{
    allSuggestions{
      _id,
      title,
      description,
      createdAt
      suggestedUser{
        _id,
        email
      }
        belongToGroup{
          _id,
          groupName
        }
      }
  }
`;

export const QUERY_SUGGESTIONS_BY_GROUP = gql`
query suggestions($id: ID!){
    suggestions(belongToGroup: $id){
      _id,
      title,
      description,
      createdAt,
      belongToGroup{
        _id
        groupName,
        destination
      }
    }
  }
`;
