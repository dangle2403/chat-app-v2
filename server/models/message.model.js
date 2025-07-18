import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text:{
    type: String,
    required: true,
  },
  image:{
    type: String,
    default: null,
  }
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;