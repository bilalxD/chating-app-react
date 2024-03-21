function Conversation() {
  return (
    <>
      <div className="flex gap-2 rounded p-2 py-1 cursor-pointer items-center hover:bg-cyan-400">
        <div className="online avatar">
          <div className="rounded-full w-12">
            <img src="https://i.pravatar.cc/150?img=1" alt="avatar" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex gap-3 justify-between">
            <p className="text-gray-200 font-bold">Asir Amin</p>
          </div>
        </div>
      </div>

      <div className="divider py-0 my-0 h-2" />
    </>
  );
}

export default Conversation;
