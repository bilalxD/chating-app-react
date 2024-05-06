import useGetMessages from "../../hooks/useGetMessages";
import { Message } from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeletons";
import { useEffect, useRef } from "react";
function Messages() {
  const { messages, loading } = useGetMessages();
  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start a Conversation</p>
      )}
    </div>
  );
}

export default Messages;
