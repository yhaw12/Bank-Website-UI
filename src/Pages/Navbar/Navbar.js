import React from 'react';
import { Link } from 'react-router-dom';
// import { BsMenu, BsSearch, BsBell } from 'react-icons/bs';
import '../Navbar/Navbar.css'
import people from '../../Images/people.png'
import {FaBars} from 'react-icons/fa'
import { HiBell } from 'react-icons/hi';
import { HiSearch } from 'react-icons/hi';


function Navbar({toggleSidebar}) {
  
  const handleThemeChange = (event) => {
    if (event.target.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  return (
    <section id='content'>
        <nav>
        <div className='bx bx-menu' onClick={toggleSidebar}>
  <FaBars />
</div>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <div className='index'>
                <HiSearch/>
                </div>
                 
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden onChange={handleThemeChange}/>
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <Link to="#" className="notification">
            <HiBell/>
            <span className="num">8</span>
          </Link>
          <Link to="#" className="profile">
            <img src={people} alt='#'/>
          </Link>
      </nav>  
    </section>
    
  );
}

export default Navbar;
