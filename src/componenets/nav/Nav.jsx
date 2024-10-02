import "./nav.css";
import { CiEdit } from "react-icons/ci";
import { TbMessage2 } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile from '../../../public/mypictures/mypic.jpg'




const Nav = () => {
  return (
    <div className="nav_container">
      <div className="search_container">
        <div>
        <CiEdit fontSize={20} color="black" fontWeight={500}/>
        </div>
        <input type="search" placeholder="Search" />
      </div>
      <div className="link_container">
        <a href="">Search</a>
        <a href="">Pages</a>
        <a href="">My Network</a>
        <select name="" id="">
          <option value="main">Account</option>
          <option value="subaccount">Sub Account</option>
        </select>
      </div>
      <div className="account_controls_container">
      <div>
      <TbMessage2 fontSize={30}/>
      </div>
      <div>
      <FiSettings fontSize={30}/>
      </div>
      <div>
      <IoIosNotificationsOutline fontSize={30}/>
      </div>
      <img src={profile} alt="my profile picture" />
      </div>
    </div>
  );
};

export default Nav;
