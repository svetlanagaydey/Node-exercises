//const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
          throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a postive number')
      }
    }
  }
});

userSchema.static.findByCredentials = async(email, password) => {
  const user = await bcrypt.compare(password, user.password);
  if(!isMatch) {
    throw new Error ('Unable to login (password exist)')
  }
return user
}

userSchema.pre('save', async function (next) {
  const user = this;
  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
})

const User = model('User', userSchema)

module.exports = User;