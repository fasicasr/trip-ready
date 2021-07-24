const db = require('../config/connection');
const { User, Group, Picture, Suggestion } = require('../models');
const userSeeds = require('./userSeeds.json');
const groupsSeeds = require('./groupsSeeds.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});
        await Group.deleteMany();
        await Suggestion.deleteMany();

        await Group.create(groupsSeeds);
        await User.create(userSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Seeding completed...');
    process.exit(0);
})