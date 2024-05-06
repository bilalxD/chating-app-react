import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const searchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const submitHandle = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else {
      toast.error("no such user found!")
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={submitHandle}>
      <input
        type="text"
        name="Search"
        id="Search"
        value={search}
        className="input input-bordered rounded-full"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className="btn btn-circle text-white bg-cyan-500" type="submit">
        <IoSearchSharp className="outline-none w-6 h-6" />
      </button>
    </form>
  );
};

export default searchInput;
