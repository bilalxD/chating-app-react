import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversations";

export const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="flex flex-col overflow-auto py-2">
      {conversations.map((conversation,idx) => (
        <Conversation
          key={conversation._id}
          conversation = {conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};
