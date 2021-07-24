const { UserInputError } = require('apollo-server-express');
const { User, Group, Picture, Suggestion } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('groups');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    }, 
    groups: async () => {
      return Group.find().populate(['users', 'suggestions']);
    },
    group: async (parent, { _id }) => {
      return Group.findOne({ _id }).populate(['users', 'suggestions']);
    },
    suggestions: async (parent, {belongToGroup}) => {
      return Suggestion.find({belongToGroup}).populate(['suggestedUser', 'belongToGroup']);
    },
    allSuggestions: async () => {
      return Suggestion.find().populate(['suggestedUser', 'belongToGroup']);
    },
    pictures: async () => {
      return Picture.find();
    },
    picture: async (parent, { _id }) => {
      return Picture.findById({ _id });
    }
  },


  Mutation: {
    addUser: async (parent, { email, firstName, lastName }) => {
      const user = await User.create({ email, firstName, lastName });
      return user;
    },
    updateUser: async (parent, { userId, email, firstName, lastName }) => {
      const updatedUser = {};

      if (email)
        updatedUser.email = email

      if (firstName)
        updatedUser.firstName = firstName

      if (lastName)
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
        
        if(users)
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
    addPicture: async (parent, { title, description, ownerName }) => {
      const picture = await Picture.create(
        {
          title,
          description,
          ownerName
        }
      );
      return picture;
    },
    updatePicture: async (parent, { _id, title, description, ownerName }) => {
      const updatedPicture = {};

      if (title)
        updatedPicture.title = title;

      if (description)
        updatedPicture.description = description;

      if (ownerName)
        updatedPicture.ownerName = ownerName;

      return Picture.findByIdAndUpdate(
        _id,
        updatedPicture,
        { new: true }
      )
    },

    updateGroup: async(parent, {_id, groupName, destination }) => {
      const updatedGroup = {};
      if(groupName) 
        updatedGroup.groupName = groupName;
      
      if(destination) 
        updatedGroup.destination = destination;

      const group = await Group.findOneAndUpdate(
        {_id},
        updatedGroup
      )
      return group;
    },
    /**
     Query example for updateGroup:
      mutation updateGroup{
        updateGroup(_id: "60fa3c175d75209e608f25eb", groupName: "Updated Black Widow!", destination: "Reston, VA"){
          _id,
          groupName,
          destination,
        }
      }
     */

      addUserToGroup: async(parent, {groupId, userId}) => {
        const group = await Group.findOneAndUpdate(
          {_id: groupId},
          {$addToSet:{users: userId}},
          {new: true}
        ) 

        await User.findOneAndUpdate(
          {_id: userId},
          {$addToSet: {groups: groupId}}
        )
        return group;
      },
      /**
       Query example for addUserToGroup:
       mutation addUserToGroup{
        addUserToGroup(groupId: "60fa3c175d75209e608f25eb", userId: "60fa36b8bddadb9d27a50376"){
          _id,
          groupName,
          destination,
          users{
            firstName
          }
        }
      }
       */

      addSuggestion: async (parent, { title, description, suggestedUser, belongToGroup}) => {
        const newSuggestion = await Suggestion.create(
          { 
            title, 
            description, 
            suggestedUser,
            belongToGroup
          }
        );
       
        await Group.findOneAndUpdate(
          { _id: belongToGroup },
          { $addToSet: {
            suggestions: newSuggestion._id
          }}
        );

        return newSuggestion;
      },

      /**
       Example query for addSuggestion:
       mutation addSuggestion{
        addSuggestion(title: "Eat food", description: "Hard Rock cafe anyone?", suggestedUser: "60fa36b8bddadb9d27a50373", belongToGroup: "60fa3c175d75209e608f25eb"){
          title,
          description,
          createdAt
        }
      }
       */

      updateSuggestion: async (parent, {_id, title, description}) => {
        const updatedSuggestion = {};

      if(title)
        updatedSuggestion.title = title

      if(description)
        updatedSuggestion.description = description

        const suggestion = await Suggestion.findOneAndUpdate(
          {_id},
          updatedSuggestion,
          {new: true}
        )
        return suggestion;
      },

      /**
       * Example Query for updateSuggestion:
       * mutation updateSuggestion{
          updateSuggestion(_id: "60fc32932cb6d4105b9616c6", title: "Updated title!"){
            _id,
            title,
            description
          }
        }
       */

      deleteSuggestion: async (parent, {_id}) => {
        const suggestion = await Suggestion.findOneAndDelete({_id});

        if (suggestion) {
          await Group.findOneAndUpdate(
            { _id: suggestion.belongToGroup._id },
            { $pull: {suggestions: suggestion._id} }  
          );
          return 'Successfully deleted a suggestion';
        }
        throw new UserInputError('Suggestion was not found');
      }

      /**
        Example query for deleteSuggestion:
        mutation deleteSuggestion{
          deleteSuggestion(_id: "60fc32ee7c34081078e48e8c")
        }
       */

  }
};

module.exports = resolvers;