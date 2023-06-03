const db = require('../config/connection');
const { User, Review } = require('../models');
const userSeeds = require('./userSeed.json');
const reviewSeeds = require('./reviewSeed.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Review.deleteMany({});
        
        await User.create(userSeeds);
        await Review.create(reviewSeeds);
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    }
);