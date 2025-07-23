import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
        setMessages(data);
      } catch (error) {
        console.error("Error in useGetMessage hook:", error);
        toast.error("Failed to retrieve messages");
      } finally {
        setLoading(false);
      }
    };
    
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  console.log("Messages:", selectedConversation._id);
  return { messages, loading };
};

export default useGetMessage;
