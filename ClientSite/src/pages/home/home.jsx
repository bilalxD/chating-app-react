// eslint-disable -next-line no-unused-vars
import Sidebar from "../../components/sidebar/sidebar";
import MessagesContainer from "../../components/messages/MessagesContainer";
const home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default home;
