import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try{
        const res = await fetch("api/users");

        const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
        setConversations(data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
        toast.error("Failed to fetch conversations");
      } finally {
        setLoading(false);
      }
    }
    getConversations();
  }, []);
  return { conversations, loading };
};

export default useGetConversation;
