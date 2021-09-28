const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        fullName: {
            type: String,
            default: '',
        },
        userName: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        gender: {
            type: String,
            default: '',
        },
        phoneNumber: {
            type: String,
            default: '',
        },
        email: {
            type: String,
            default: '',
        },
        password: {
            type: String,
            default: '',
        },
        // avatar: {
        //     type: String, default: ''
        // },
        role: {
            type: String,
            default: 'USER',
        },
        // shippingFee: {
        //     type: String, default: ''
        // },
        // fcm: {
        //     type: String, default: ''
        // }
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', User);
