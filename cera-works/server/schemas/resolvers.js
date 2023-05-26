const { User } = require('../models');
const Review  = require('./models');

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
            return Schedule.create({ name, date, time, location, description });
        },
        createUser: async (parent, { email, password }) => {
            return User.create({ email, password });
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
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