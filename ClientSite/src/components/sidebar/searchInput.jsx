import { IoSearchSharp } from "react-icons/io5";

const searchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        name="Search"
        id="Search"
        className="input input-bordered rounded-full"
        placeholder="Search..."
      />
      <button className="btn btn-circle text-white bg-cyan-500" type="submit">
        <IoSearchSharp className="outline-none w-6 h-6" />
      </button>
    </form>
  );
};

export default searchInput;
