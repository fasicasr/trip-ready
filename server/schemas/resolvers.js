const { UserInputError } = require('apollo-server-express');
const { User, Group, Picture } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
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
    }


  }
};

module.exports = resolvers;