const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],


    },
    comment: {
        type: String,
        required: [true, 'Please enter a comment'],
    },
});

const Review = model('review', reviewSchema);

module.exports = Review;