import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (inputs) => {
    try {
      setLoading(true);
      const success = handleInputsError(inputs);
      if (!success) return;
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          inputs.usernameOrEmail.includes("@")
            ? { email: inputs.usernameOrEmail, password: inputs.password }
            : { username: inputs.usernameOrEmail, password: inputs.password }
        ),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Login failed");
        return;
      }
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data.user));
      setAuthUser(data.user);
      toast.success("Login successful");
    } catch (error) {
      console.error("Error in useLogin hook:", error);
      toast.error("Login failed.");
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};

export default useLogin;

function handleInputsError(inputs) {
  if (!inputs.usernameOrEmail || !inputs.password) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (inputs.password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
  if (inputs.usernameOrEmail.includes("@")) {
    // Email validation
    if (!/\S+@\S+\.\S+/.test(inputs.usernameOrEmail)) {
      toast.error("Please enter a valid email address");
      return false;
    }
  } else {
    // Username validation
    if (inputs.usernameOrEmail.length < 3) {
      toast.error("Username must be at least 3 characters long");
      return false;
    }
  }
  return true;
}
