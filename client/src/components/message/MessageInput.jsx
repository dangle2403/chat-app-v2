import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage.js";
const MessageInput = () => {
  const [input, setInput] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(input);
    setInput(""); // Clear input after sending
  }
  return (
    <div className="p-4 w-full">
      <form className="flex items-center gap-4" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Type a message..." className="w-full input rounded-lg input-sm sm:input-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="file" accept="image/*" className="hidden"/>
        <button className="hidden sm:flex btn btn-circle hover:bg-base-content-300 justify-center items-center"><AiOutlinePicture className="size-7"/></button>
        <button className="hidden sm:flex btn btn-circle hover:bg-base-content-300 justify-center items-center">{loading ? <span className="loading loading-spinner"></span> : <IoMdSend className="size-7"/>}</button>
      </form>
    </div>
  )
}

export default MessageInput