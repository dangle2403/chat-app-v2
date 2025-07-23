import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const user = localStorage.getItem("chat-user");
      const parsedUser = user && user !== "undefined" ? JSON.parse(user) : null;
      return parsedUser;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      localStorage.removeItem("chat-user");
      return null;
    }
  });

  // Add debugging for when authUser changes
  const setAuthUserWithDebug = (user) => {
    console.log("Setting authUser to:", user);
    setAuthUser(user);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser: setAuthUserWithDebug }}>
      {children}
    </AuthContext.Provider>
  );
};
