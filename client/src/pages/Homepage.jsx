import ChatContainer from "../components/message/ChatContainer";
import NoChatSelected from "../components/message/NoChatSelected";
import Sidebar from "../components/message/Sidebar";
import { useEffect } from "react";
import useConversation from "../zustand/useConversation";
const Homepage = () => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  useEffect(() => {
    // clean up function to reset selected conversation
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
  return (
    <div className="h-[calc(100vh-4rem)] bg-blue-100">
      <div className="flex items-center justify-center pt-4 px-4 h-full">
        <div className="bg-amber-200 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100%-2rem)] p-2">
          <div className="flex h-full">
            <Sidebar />
            {selectedConversation === null ? (
              <NoChatSelected />
            ) : (
              <ChatContainer />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
