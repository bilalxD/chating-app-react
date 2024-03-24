export const Message = () => {
  return (
    <div className="chat chat-end m-2">
      <div className="avatar chat-image">
        <div className="rounded-full w-11">
          <img src="https://i.pravatar.cc/150?img=1" alt="avatar" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-cyan-500">
        Hey!  Whatsapp.
      </div>
      <div className="chat-footer opacity-70 text-xs items-center flex gap-1 mt-1">12:00</div>
    </div>
  );
};
