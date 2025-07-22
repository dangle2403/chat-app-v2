import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contest/AuthContext";

function handleInputsError(inputs) {
  if (
    !inputs.username ||
    !inputs.email ||
    !inputs.password ||
    !inputs.confirmPassword ||
    !inputs.fullName ||
    !inputs.gender
  ) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (inputs.password !== inputs.confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (inputs.password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
  if (inputs.username.length < 3) {
    toast.error("Username must be at least 3 characters long");
    return false;
  }
  if (inputs.fullName.length < 3) {
    toast.error("Full name must be at least 3 characters long");
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    toast.error("Please enter a valid email address");
    return false;
  }
  return true;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async (inputs) => {
    const success = handleInputsError(inputs);
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Signup failed");
        return;
      }
      if (data.error) {
        throw new Error(data.error);
      }
      // localstorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      // update auth context
      setAuthUser(data);

      toast.success("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

export default useSignup;
