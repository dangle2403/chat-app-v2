import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../zustand/useConversation";
import useGetConversation from "../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search term must be at least 3 characters long");
      return;
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input rounded-full "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle border-2 bg-base-800 hidden lg:block"
      >
        <div className="flex items-center justify-center">
          <IoMdSearch className="text-gray-400 size-7" />
        </div>
      </button>
    </form>
  );
};

export default SearchInput;
