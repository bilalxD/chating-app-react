import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Login 
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
          <label className="label p-2">
            <span className="text-base label-text text-white">Username</span>
          </label>
          <input
            className="input input-bordered w-full h-10"
            type="text"
            placeholder="Enter Your Username"
          />
          </div>

          <div>
          <label className="label">
            <span className="text-base label-text text-white">Password</span>
          </label>
          <input
            className="input input-bordered w-full h-10"
            type="password"
            placeholder="Enter Your Password"
          />
          </div>
          <Link className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white float-left ml-1" to="/signup">{"Don't"} have an account?</Link>

          <button className="btn btn-sm btn-block mt-3" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
