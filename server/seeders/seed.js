const db = require('../config/connection');
const { User, Group, Picture, Suggestion } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});

        await User.create(userSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Seeding completed...');
    process.exit(0);
})