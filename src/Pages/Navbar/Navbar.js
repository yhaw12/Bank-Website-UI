import React from 'react';
import { Link } from 'react-router-dom';
import { BsMenu, BsSearch, BsBell } from 'react-icons/bs';


function Navbar() {
  return (
    <nav>
      <BsMenu />
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <BsSearch />
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <Link to="#" className="notification">
        <BsBell />
        <span className="num">8</span>
      </Link>
      <Link to="#" className="profile">
        <img src="img/people.png" alt="Profile" />
      </Link>
    </nav>
  );
}

export default Navbar;
