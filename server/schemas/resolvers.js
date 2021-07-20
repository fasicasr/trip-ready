const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    }
  },
  // Mutation: {
  //   //CRUD code goes here
  // },
};

module.exports = resolvers;