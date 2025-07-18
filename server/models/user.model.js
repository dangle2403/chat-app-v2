import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName:{
    type: String,
    required: true,
    minLength: 3,
  },
  username:{
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
    minLength: 6,
  },
  gender:{
    type: String,
    required: true,
    enum: ["Male", "Female"]
  },
  profilePicture:{
    type: String,
    default: "",
  }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;