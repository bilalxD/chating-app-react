function Conversation({conversation, lastIdx}) {
  return (
    <>
      <div className="flex gap-2 rounded p-2 py-1 cursor-pointer items-center hover:bg-cyan-400">
        <div className="online avatar">
          <div className="rounded-full w-12">
            <img src={conversation.profilePic} alt="avatar" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex gap-3 justify-between">
            <p className="text-gray-200 font-bold">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider py-0 my-0 h-2" />}
    </>
  );
}

export default Conversation;

