import { IoMdClose } from "react-icons/io";

const ChatHeader = () => {
  return (
    <div className="p-2 border-b border-base-300 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 relative">
              <img src={"/avatar.png"} alt="avatar" />
            </div>
          </div>
          {/* User infor */}
          <div >
            <h2 className="font-medium">Name</h2>
            <p className="text-sm text-base-content/70">Online</p>
          </div>
        </div>
        {/* close button */}
        <button className="hover:bg-base-content/30"><IoMdClose className="size-6"/></button>
      </div>
    </div>
  )
}

export default ChatHeader