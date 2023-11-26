import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../../Pages/Home/Home.css';
import Sidebar from '../Sidebar/Sidebar';
import { BiCalendarCheck, BiGroup, BiDollarCircle } from 'react-icons/bi';

function Home() {
 const [isOpen, setIsOpen] = useState(false);
 const [isHidden, setIsHidden] = useState(false);
 
 const toggleSidebar = () => {
  setIsOpen(!isOpen);
  setIsHidden(!isHidden);
};
 
 
 const location = useLocation();
 const pathSegments = location.pathname.split('/').filter(Boolean);
 const breadcrumbs = pathSegments.map((segment, index) => {
   const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
   const text = segment.charAt(0).toUpperCase() + segment.slice(1);
   return (
     <li key={url}>
       <Link to={url}>{text}</Link>
     </li>
   );
 });

 return (
   <div >
     <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} isHidden={isHidden} setIsHidden={setIsHidden} /> 
     <Navbar toggleSidebar={toggleSidebar} />
     <div id='content'>
       <main>
         <div className="head-title">
           <div className="left">
             <h1>Dashboard</h1>
             <ul className="breadcrumb" id="breadcrumb">
               <li>
                <Link to="/">Home</Link>
               </li>
               {breadcrumbs}
             </ul>
           </div>
         </div>
         <ul className="box-info">
          <li>
             <BiCalendarCheck /> 
            <span className="text">
              <h3>03312343356677</h3>
              <p>Account Info</p>
            </span>
          </li>
          <li>
             <BiGroup /> 
            <span className="text">
              <h3>$2834</h3>
              <p>Widthrawals</p>
            </span>
          </li>
          <li>
            <BiDollarCircle /> 
            <span className="text">
              <h3>$2543</h3>
              <p>Total Transactions</p>
            </span>
          </li>
        </ul>
        <div>
            <Outlet/>
        </div>
       </main>
     </div>
   </div>
 );
}

export default Home;


