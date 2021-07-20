const { UserInputError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
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
    }


  }
};

module.exports = resolvers;