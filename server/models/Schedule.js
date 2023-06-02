const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    phone: {
        type: String,
        required: [true, 'Please enter a phone number'],
    },
    date: {
        type: String,
        required: [true, 'Please enter the day you would like to schedule'],
    },
    time: {
        type: String,
        required: [true, 'Please enter the time you would like to schedule'],
    },
    car: {
        type: String,
        required: [true, 'Please enter the car make and model'],
    },
    service: {
        type: String,
        required: [true, 'Please enter the service you would like to schedule'],
    },
    message: {
        type: String,
    },
});

const Schedule = model('schedule', scheduleSchema);

module.exports = Schedule;