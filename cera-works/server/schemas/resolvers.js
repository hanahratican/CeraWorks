const User = require('../models/User');
const Review  = require('../models/Review');
const Schedule = require('../models/Schedule');

const resolvers = {
    Query: {
        reviews: async () => {
            return Review.find();
        },
        schedules: async () => {
            return Schedule.find();
        },
        user: async (_, { _id }) => User.findById({ _id }),
    },
    Mutation: {
        addReview: async (parent, { name, rating, comment }) => {
            return Review.create({ name, rating, comment });
        },
        createSchedule: async (parent, { name, date, time, location, description }) => {
            return await Schedule.create({ name, date, time, location, description });
        },
        createUser: async (parent, { email, password }) => {
            return User.create({ email, password });
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Sorry, there is no user found with this email address!');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Sorry, your password is incorrect!');
            }
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, { _id, email, password }) => {
            User.findByIdAndUpdate({ _id }, { email, password });
        },
        removeUser: async (parent, { _id }) => {
            return User.findByIdAndDelete({ _id });
        }
    }

};

module.exports = resolvers;