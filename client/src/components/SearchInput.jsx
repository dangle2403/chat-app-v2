import { IoMdSearch } from "react-icons/io";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input rounded-full "
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
