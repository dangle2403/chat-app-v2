import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import useConversation from "../../zustand/useConversation";
import useGetMessage from "../../hooks/useGetMessage";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useRef } from "react";
import useListenMessage from "../../hooks/useListenMessage";

const ChatContainer = () => {
  useListenMessage();
  const { selectedConversation } = useConversation();
  const { loading, messages } = useGetMessage();
  const { authUser } = useAuthContext();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <ChatHeader />
      {loading && <MessageSkeleton />}
      {!loading && messages.length > 0 && (
        <div className="px-4 flex-1 overflow-auto">
          {messages.map((message) => {
            const fromMe = message.sender === authUser._id;
            const chatClassName = fromMe ? "chat-end" : "chat-start";
            const avatarSrc = fromMe
              ? authUser.profilePicture || "/avatar.png"
              : selectedConversation.profilePicture || "/avatar.png";
            const bubbleColor = fromMe
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black";
            return (
              <div
                key={message._id}
                ref={lastMessageRef}
                className={`chat ${chatClassName} mb-4`}
              >
                <div className="chat-image avatar">
                  <div className="size-10 rounded-full overflow-hidden">
                    <img
                      src={avatarSrc}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`chat-bubble ${bubbleColor} max-w-xs lg:max-w-md`}
                >
                  {message.message}
                </div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                  {new Date(message.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!loading && messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">
            No messages yet. Start the conversation!
          </p>
        </div>
      )}

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
