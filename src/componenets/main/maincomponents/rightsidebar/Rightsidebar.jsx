import "./rightsidebar.css";
import TodaysNews from "./TodaysNews";
import WhoToFollow from "./WhoToFollow";

const Rightsidebar = () => {
  return (
    <div className="container_right">
      <WhoToFollow />
      <TodaysNews />
    </div>
  );
};

export default Rightsidebar;
