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
  // Mutation: {
  //   //CRUD code goes here
  // },
};

module.exports = resolvers;