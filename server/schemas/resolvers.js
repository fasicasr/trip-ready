const { UserInputError } = require('apollo-server-express');
const { User, Group } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('groups');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    }, 
    groups: async () => {
      return Group.find().populate('users');
    },
    group: async (parent, { _id }) => {
      return Group.findOne({ _id }).populate('users');
    }
  },
  Mutation: {
    addUser: async (parent, { email, firstName, lastName }) => {
      const user = await User.create({ email, firstName, lastName });
      return user;
    },
    updateUser: async (parent, { userId, email, firstName, lastName }) => {
      const updatedUser = {};

      if(email)
        updatedUser.email = email

      if(firstName)
        updatedUser.firstName = firstName

      if(lastName)
        updatedUser.lastName = lastName

      return User.findByIdAndUpdate(
        userId,
        updatedUser,
        { new: true }
      )
    },
    deleteUser: async (parent, { email }) => {
      const result = await User.findOneAndDelete({ email: email });

      if (result)
        return 'Successfully deleted a user';
      throw new UserInputError('email was not found');
    },

    addGroup: async (parent, { groupName, destination, users }) => {

      const group = await Group.create(
        { 
          groupName, 
          destination, 
          users: users
        });
        
        users.forEach(async (user) => {
          console.log(user);
          await User.findOneAndUpdate(
            {_id: user},
            { $addToSet: { groups: group._id } }
          )
        });

      return group;
    },
    /** 
     Query example for addGroup:
     mutation addGroup($groupName: String!, $destination: String!, $user_id: [ID]!){
        mutation addGroup($groupName: String!, $destination: String!, $user_id: [ID]){
          addGroup(groupName: $groupName, destination: $destination, users: $user_id){
            _id,
            groupName,
            destination,
            users{
              _id,
              firstName
            }
          }
        }
      Query variables:
      {
        "groupName": "Black Widow's group",
        "destination": "New York",
        "user_id": [
          "60fa36b8bddadb9d27a50373",
          "60fa36b8bddadb9d27a50375"
        ]
      }

    */



    deleteGroup: async (parent, { id }) => {
      const result = await Group.findOneAndDelete({ _id: id });

      if (result)
        return 'Successfully deleted a group';
      throw new UserInputError('Group was not found');
    },
/**
   Query example for delete: 
    mutation deleteGroup{
      deleteGroup(id: "60f9f85b8c52c690666104e3" )
    }
 */

    // updateGroup: async(parent, {id, groupName, destination, user_id }) => {
    //   const group = await Group.findOneAndUpdate(
    //     {_id: id},
    //     {}
    //     )
    // }


  }
};

module.exports = resolvers;