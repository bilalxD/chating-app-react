// eslint-disable-next-line no-unused-vars
import sidebar from "../../components/sidebar/sidebar";
const home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <sidebar />
    </div>
  );
};

export default home;
