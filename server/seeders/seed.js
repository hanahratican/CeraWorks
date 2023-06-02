const db = require('../config/connection');
const { User, Review, Schedule } = require('../models');
const userSeeds = require('./userSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');
const scheduleSeeds = require('./scheduleSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Review.deleteMany({});
        await Schedule.deleteMany({});
    
        await User.create(userSeeds);
        await Review.create(reviewSeeds);
        await Schedule.create(scheduleSeeds);
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    }
);