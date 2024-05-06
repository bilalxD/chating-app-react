import { useAuthContext } from "../../context/authContext";
import useConversation from "../../zustand/useConversation";
import extractTime from "../../utils/extractTime"

export const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formatedTime = extractTime(message.createdAt)
  
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bgBubbleColor = fromMe ? "bg-cyan-500" : "";

  return (
    <div className={`chat ${chatClassName} m-2`}>
      <div className="avatar chat-image">
        <div className="rounded-full w-11">
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bgBubbleColor}` }>{message.message}</div>
      <div className="chat-footer opacity-70 text-xs items-center flex gap-1 mt-1">
        {formatedTime}
      </div>
    </div>
  );
};
