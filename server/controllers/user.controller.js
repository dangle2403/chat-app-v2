import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try{
    const loggedUser = req.user._id;
    const allUsers = await User.find({ _id: {$ne: loggedUser} }).select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching users for sidebar:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};