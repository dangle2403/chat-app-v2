import SearchInput from "../SearchInput";
import { FaRegUser } from "react-icons/fa";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/socketContext";

const Sidebar = () => {
  const { loading, conversations } = useGetConversation();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-4">
        <SearchInput />
        <div className="flex items-center gap-2 mt-4">
          <FaRegUser className="text-gray-400 size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
        <div className="mt-4 rounded-lg">
          {loading ? (
            <div className="flex justify-center p-4">
              <span className="loading loading-spinner"></span>
            </div>
          ) : (
            conversations.map((conversation) => {
              const isSelected = selectedConversation?._id === conversation._id;
              const isOnline = onlineUsers.includes(conversation._id);
              return (
                <div key={conversation._id} className="mb-2">
                  <button
                    className={`w-full p-3 flex items-center gap-3 bg-amber-200 hover:bg-amber-100 transition-colors ring-1 ring-base-300
                      ${isSelected ? "bg-amber-100" : ""}`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="relative mx-auto lg:mx-0">
                      <img
                        src={conversation.profilePicture || "/avatar.png"}
                        alt={"User Avatar"}
                        className="size-12 object-cover rounded-full"
                      />
                      <span
                        className={`absolute bottom-0 right-0 size-3 ${
                          isOnline ? "bg-green-500" : "bg-gray-400"
                        }
                          rounded-full ring-2 ring-zinc-900 mr-2`}
                      ></span>
                    </div>

                    <div className="hidden lg:block text-left min-w-0">
                      <div className="font-medium truncate">
                        {conversation.fullName}
                      </div>
                      <div className="text-sm text-zinc-400">online</div>
                    </div>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
