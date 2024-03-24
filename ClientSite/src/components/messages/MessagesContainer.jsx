import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessages } from "react-icons/ti";

const MessagesContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 mb-2 py-2 px-4 sticky top-0 z-40">
            <span className="label-text float-left font-semibold">To:</span>
            <span className="text-gray-900 font-bold">Asir Amin</span>
          </div>
          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
};

export default MessagesContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center h-full w-full justify-center">
      <div className="px-4 items-center sm:text-lg md:text-xl flex font-semibold text-gray-200 flex-col text-center gap-2">
        <p>Welcome Bilal Arif</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
