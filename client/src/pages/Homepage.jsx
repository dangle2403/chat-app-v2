import ChatContainer from "../components/message/ChatContainer";
import NoChatSelected from "../components/message/NoChatSelected";
import Sidebar from "../components/message/Sidebar";
import { useState } from "react";
const Homepage = () => {
  const [chatSelected, setChatSelected] = useState(false);
  return (
    <div className="h-[calc(100vh-4rem)] bg-blue-100">
      <div className="flex items-center justify-center pt-4 px-4 h-full">
        <div className="bg-amber-200 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100%-2rem)] p-2">
          <div className="flex h-full">
            <Sidebar />
            {chatSelected ? <NoChatSelected />: <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
