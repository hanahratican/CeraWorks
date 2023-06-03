const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
<<<<<<< HEAD
=======
        unique: true,
>>>>>>> f1a2cf90 (Removed rating from reviews in Review.js, resolvers and typeDefs)
    },
    comment: {
        type: String,
        required: [true, 'Please enter a comment'],
    },
});

const Review = model('review', reviewSchema);

module.exports = Review;