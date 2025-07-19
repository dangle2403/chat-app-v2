import { Link } from "react-router-dom";
import GenderCheckBox from "../components/GenderCheckBox";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="bg-gray-500 p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-cyan-400"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base-300">Full Name</span>
            </label>
            <div className="relative">
              <MdDriveFileRenameOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full input h-10 pl-10"
              />
            </div>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base-300">Username</span>
            </label>
            <div className="relative">
              <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Enter username"
                className="w-full input h-10 pl-10"
              />
            </div>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base-300">Email</span>
            </label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full input h-10 pl-10"
              />
            </div>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base-300">Password</span>
            </label>
            <div className="relative">
              <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full input h-10 pl-10"
              />
            </div>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base-300">Confirm Password</span>
            </label>
            <div className="relative">
              <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full input h-10 pl-10"
              />
            </div>
          </div>
          <div>
            <GenderCheckBox />
          </div>
          <button type="submit" className="btn-neutral btn btn-sm w-full mt-4">
            Sign Up
          </button>
          <div>
            <p className="text-center text-gray-300 mt-2 text-sm">
              Already have an account?{" "}
              <span className="text-blue-300 hover:underline hover:text-cyan-400">
                <Link to="/signin">Sign In</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
