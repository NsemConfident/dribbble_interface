import "./nav.css";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="search_container">
        <img src="" alt="" />
        <input type="search" placeholder="Search" />
      </div>
      <div className="link_container">
        <a href="">search</a>
        <a href="">search</a>
        <a href="">search</a>
        <select name="#" id="">
            <option value="main">Main Account</option>
            <option value="subaccount">Sub Account</option>
        </select>
      </div>
      <div className="account_controls_container">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Nav;
