import React from "react";
import elxsiLogo from "../../assets/elxsilogo1.png";
import langLogo from "../../assets/lang-logo.png";
import userAvatar from "../../assets/user-avatar.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="bgcol">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid ">
          <img className="logo my-2" src={elxsiLogo} alt="TATA ELXSI"></img>
          <div className="dropdown">
            <img className="lang" src={langLogo} alt="Language"></img>
            <span>
              <select className="text">
                <option value="English" className=" ">
                  English
                </option>
                <option value="Spanish" className=" ">
                  Spanish
                </option>
              </select>
            </span>
            <button
              className="btn profileBtn dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={userAvatar} alt="profile" className="mx-3"></img> Nivash
              Anandan
            </button>
            <ul className="dropdown-menu my-3 ">
              <li>
                <a className="dropdown-item" /*href="/"*/>My Profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
