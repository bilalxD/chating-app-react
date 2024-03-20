// eslint-disable-next-line no-unused-vars
import Sidebar from "../../components/sidebar/sidebar";
const home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
    </div>
  );
};

export default home;
