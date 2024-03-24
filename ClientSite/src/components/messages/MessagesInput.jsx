import { BsSend } from "react-icons/bs";
const MessagesInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          name="chatbox"
          id="chatbox"
          className="bordered text-sm rounded-lg text-white bg-gray-700 border-gray-600 w-full block p-2.5"
          placeholder="Send a message"
        />
        <button
          className="absolute inset-y-0 end-0 flex pe-3 items-center text-white"
          type="submit"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;
