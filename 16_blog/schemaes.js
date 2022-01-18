const { Schema, model } = require("mongoose");
const validator = require("validator");

const commentSchema = new Schema({ email: String, content: String });

const postSchema = new Schema({
  post: String,
  comments: [commentSchema]
});

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function (value) {
          return validator.isEmail(value);
        },
    },
    posts: postSchema,
});

const User = model("users", userSchema);
//const Post = model("users", postSchema);


module.exports = User;