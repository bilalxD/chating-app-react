import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../../hooks/useSendMessages";
const MessagesInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessages();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessages(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          name="chatBox"
          id="chatBox"
          className="bordered text-sm rounded-lg text-white bg-gray-700 border-gray-600 w-full block p-2.5"
          placeholder="Send a message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="absolute inset-y-0 end-0 flex pe-3 items-center text-white"
          type="submit"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;
