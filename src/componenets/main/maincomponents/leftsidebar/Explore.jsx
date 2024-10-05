import { useState } from "react";
import {menuLink, menuImage} from '../../../../../src/Data/menuItems'

const Explore = () => {

  const [activeNav, setActiveNav] = useState('#');


  return (
    <div className="container_explore">
      <ol>
      {menuLink.map((menu, index)=>(
        
        <li key={index}>
        <a href={menu.href} onClick={()=>setActiveNav(menu.href)} className={activeNav ===menu.href ? 'active' : ''}>         
          {menu.icon}
          <p>{menu.name}</p>
        </a>
        </li>

      ))}
        
      </ol>
      <hr />
      <h4>PAGES YOU LIKE</h4>
      <ol className="pages">
      {
        menuImage.map((m, id)=>(
          <li key={id}>
        <img src={m.path} alt="" />
          <p>{m.title}</p>
        </li>
        ))
      }
      </ol>
    </div>
  );
};

export default Explore;
