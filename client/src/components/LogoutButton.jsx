import { useAuthContext } from "../contest/AuthContext";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();
  const { authUser } = useAuthContext();
  return (
    <>
      <button
        className={`
        ${!authUser ? "hidden btn-disabled" : "relative cursor-pointer hover:bg-blue-400 btn-outline bg-blue-600 rounded-lg text-white px-3 py-1"}`}
        onClick={logout}
      >
        {loading ? "Logging out..." : "Logout"}
      </button>
    </>
  );
};

export default LogoutButton;
