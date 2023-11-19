import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: Number,
      required: true
    },
    role: {
      type: String,
      default: User
    },
    profilePicture: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

export const User = mongoose.model('User', userSchema);
