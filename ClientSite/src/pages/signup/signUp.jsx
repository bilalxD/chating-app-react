import GenderCheckbox from "./GenderCheckbox";

function signUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <label className="label p-2">
            <span className="text-base label-text text-white">Full Name</span>
          </label>
          <input
            type="text"
            name="full name"
            id="full name"
            className="w-full input input-bordered h-10"
            placeholder="Enter Full Name"
          />

          <label className="label p-2">
            <span className="text-base label-text text-white">Username</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            className="w-full input input-bordered h-10"
          />

          <label className="label p-2">
            <span className="text-base label-text text-white">Password</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="input w-full input-bordered h-10"
          />
          <label className="label p-2">
            <span className="text-base label-text text-white">
              Confirm Password
            </span>
          </label>
          <input
            type="password"
            name="cPassword"
            id="cPassword"
            placeholder="Enter Confirm Password"
            className="input input-bordered w-full h-10"
          />
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-500 inline-block mt-2 item float-left ml-1"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-4 border border-cyan-300 shadow-md hover:bg-cyan-600 hover:text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signUp;
