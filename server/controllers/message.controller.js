import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiver } = req.params;
    const sender = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [sender, receiver] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [sender, receiver],
      });
    }

    const newMessage = new Message({
      sender,
      receiver,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // run parallel
    await Promise.all([newMessage.save(), conversation.save()]);

    res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getMessages = async (req, res) => {
  try {
    const { id: receiver } = req.params; 
    const sender = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [sender, receiver] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
