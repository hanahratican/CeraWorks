const User = require('../models/User');
const Review  = require('../models/Review');

const resolvers = {
    Query: {
        reviews: async () => {
            return Review.find();
        },
        users: async () => {
            return User.find();
        },
        // user: async (parent, { email }) => {
        //     return User.findOne({ email });
        // },
    },
    Mutation: {
        addReview: async (_, { name, comment }) => {
            try {
              const newReview = await Review.create({ name, comment });
              return newReview;
            } catch (error) {
              console.error('Error adding review:', error);
              throw new Error('Failed to add review');
            }
        },
        addUser: async (parent, { email, password }) => {
            // First we create the user
            const user = await User.create({ email, password });
            // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
            const token = signToken(user);
            // Return an `Auth` object that consists of the signed token and user's information
            return { token, user };
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