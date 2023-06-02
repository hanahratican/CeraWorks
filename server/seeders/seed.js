const db = require('../config/connection');
const { User, Review } = require('../models');
// above also contained Schedule but it is not needed
const userSeeds = require('./userSeed.json');
const reviewSeeds = require('./reviewSeed.json');
// const scheduleSeeds = require('./scheduleSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Review.deleteMany({});
        // await Schedule.deleteMany({});
    
        await User.create(userSeeds);
        await Review.create(reviewSeeds);
        // await Schedule.create(scheduleSeeds);
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    }
);