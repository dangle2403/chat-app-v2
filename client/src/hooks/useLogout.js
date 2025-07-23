import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);
      toast.success("Logout successful");
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;
