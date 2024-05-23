import { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => menuRef.current.style.right="0";
  const closeMenu = () => menuRef.current.style.right="-350px";

  const menuItems = [
      { name: "Home", key: "home" },
      { name: "About Me", key: "about" },
      { name: "Services", key: "services" },
      { name: "Portfolio", key: "work" },
      { name: "Contact", key: "contact" }
  ];

  return (
      <div className='navbar'>
          <h2 className='nav-title'>
              Baltazar.
          </h2>
          <img src={menu_open} alt="menu open" className='nav-mob-open' onClick={openMenu}/>
          <ul className='nav-menu' ref={menuRef}>
              <img src={menu_close} alt="menu close" className="nav-mob-close" onClick={closeMenu}/>
              {menuItems.map(item => (
                  <li key={item.key}>
                      <AnchorLink className='anchor-link' offset={50} href={`#${item.key}`}>
                        <p onClick={() => {
                            closeMenu()
                            setMenu(item.key)
                            }}>
                            {item.name}
                        </p>
                      </AnchorLink>
                      {menu === item.key && <img src={underline} alt='underline' />}
                  </li>
                  
              ))}
          </ul>
          <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
          </div>
      </div>
  );
};

export default Navbar;