const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        unique: true,
    },
    rating: {
        type: Number,
        required: [true, 'Please enter a rating'],
    },
    comment: {
        type: String,
        required: [true, 'Please enter a comment'],
    },
});

const Review = model('review', reviewSchema);

module.exports = Review;