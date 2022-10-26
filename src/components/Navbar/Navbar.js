import { useState } from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  const [menuCloseState, setMenuCloseState] = useState(true);
  const menuOpenIconClass = menuCloseState
    ? `${style.mobMenuOpen}`
    : `${style.HIDE}`;
  const menubarClass = menuCloseState ? `${style.NAVHIDE}` : `${style.NAVSHOW}`;
  const changeMenuState = () => {
    setMenuCloseState((prevMenuState) => {
      return !prevMenuState;
    });
  };
  return (
    <header>
      <div className={style.topNav}>
        <div className={style.Logo}>
          {/* logo */}
          <span>K</span>
          <span>Pass</span>
          <span>Generator</span>
        </div>
        <div className={menuOpenIconClass}>
          <i className="fa-solid fa-bars" onClick={changeMenuState}></i>
        </div>
      </div>

      <nav className={menubarClass}>
        <div className={style.mobMenuClose}>
          <i className="fa-solid fa-xmark" onClick={changeMenuState}></i>
        </div>
        <ul>
          <li>
            <a
              href="https://kpaul-7.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Usefull links
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
