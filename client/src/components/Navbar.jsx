import { Link } from "react-router-dom";
import { BsChatLeftTextFill } from "react-icons/bs";
import { useState } from "react";
import LogoutButton from "./LogoutButton.jsx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toggleProfileMenu, setToggleProfileMenu] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`${mobileMenuOpen ? "hidden" : "block"} size-6`}
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`${mobileMenuOpen ? "block" : "hidden"} size-6`}
              >
                <path d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to={"/"} className="flex shrink-0 items-center">
              <BsChatLeftTextFill className="text-white text-3xl" />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to={"/"}
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  Homepage
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <LogoutButton />
            <button className="relative ml-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-6"
              >
                <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </button>

            <div className="relative ml-3">
              <button
                onClick={() => setToggleProfileMenu(!toggleProfileMenu)}
                className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white"
              >
                <img
                  src="/avatar.png"
                  alt="Profile"
                  className="size-8 rounded-full"
                />
              </button>

              {toggleProfileMenu && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                  <Link
                    to={"/profile"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to={"/settings"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to={"/"}
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            >
              Homepage
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
