const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        require: true,
        type: String,
        trim: true,
    },
    email: {
        require: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message:  "Please enter a valid email address",
        },
    },
    password: {
        require: true,
        type: String,
        validate: {
            validator: (value) => {
                return value.length > 8;
             },
             message: "Password must be greater than or equal to 8 characters",
        },
    },
    address: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "user",
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;