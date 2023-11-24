import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css'
import { BxSmile, BxDashboard, BxShoppingBagAlt,
   BxDoughnutChart, BxMessageDots, BxGroup, BxCog,
    BxLogOutCircle } from 'react-icons/bx';

function Sidebar() {
  return (
    <section id="sidebar">
      <Link to="#" className="brand">
        <BxSmile/>
        <span className="text">Flash Bank</span>
      </Link>
      <ul className="side-menu top">
        <li className="active">
          <Link to="#">
            <BxDashboard/>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <BxShoppingBagAlt/>
            <span className="text">Transfer Money</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <BxDoughnutChart/>
            <span className="text">Withdraw Money</span>
          </Link>
        </li>
        <li>
				<Link to="#">
          <BxDoughnutChart/>
					<span class="text">My Account</span>
				</Link>
			</li>
			<li>
				<Link to="#">
          <BxMessageDots/>
					<span class="text">Message</span>
				</Link>
			</li>
			<li>
				<Link to="#">
          <BxGroup/>
					<span class="text">Team</span>
				</Link>
			</li>
      </ul>
      <ul class="side-menu">
			<li>
				<Link to="#">
          <BxCog/>
					<span class="text">Settings</span>
				</Link>
			</li>
			<li>
				<Link to="#" class="logout">
          <BxLogOutCircle/>
					<span class="text">Logout</span>
				</Link>
			</li>
		</ul>
    </section>
  );
}

export default Sidebar;
