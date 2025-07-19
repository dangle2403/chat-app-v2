import { IoMdClose } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
const MessageInput = () => {
  return (
    <div className="p-4 w-full">
      <form className="flex items-center gap-4">
        <input type="text" placeholder="Type a message..." className="w-full input rounded-lg input-sm sm:input-md"/>
        <input type="file" accept="image/*" className="hidden"/>
        <button className="hidden sm:flex btn btn-circle hover:bg-base-content-300"><AiOutlinePicture className="size-7"/></button>
        <button className="hidden sm:flex btn btn-circle hover:bg-base-content-300"><IoMdSend className="size-7"/></button>
      </form>
    </div>
  )
}

export default MessageInput