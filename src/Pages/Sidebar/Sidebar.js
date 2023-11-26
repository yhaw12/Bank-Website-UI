import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css';
import { BiSmile, BiSolidDashboard, BiShoppingBag, BiDoughnutChart, BiMessageDots, BiGroup, BiCog, BiLogOutCircle } from 'react-icons/bi';

const Sidebar = ({ isOpen, toggleSidebar, isHidden, setIsHidden }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  }

  const iconMapping = {
    BiSolidDashboard: <BiSolidDashboard />,
    BiShoppingBag: <BiShoppingBag />,
    BiDoughnutChart: <BiDoughnutChart />,
    BiMessageDots: <BiMessageDots />,
    BiGroup: <BiGroup />,
    BiCog: <BiCog />,
    BiLogOutCircle: <BiLogOutCircle />
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: 'BiSolidDashboard',
      link: '/dashboard'
    },
    {
      name: 'Transfer Money',
      icon: 'BiShoppingBag',
      link: '/transfer'
    },
    {
      name: 'Withdraw Money',
      icon: 'BiDoughnutChart',
      link: '/withdraw'
    },
    {
      name: 'My Account',
      icon: 'BiDoughnutChart',
      link: '/accounts'
    },
    { 
      name: 'Message',
      icon: 'BiMessageDots',
      link: 'message'
    },
    { 
      name: 'Team',
      icon: 'BiGroup',
      link: 'team'
    },
    
  ];

  const bottomList = [
    { 
      name: 'Settings',
      icon: 'BiCog',
      link: 'settings'
    },
    { 
      name: 'Logout',
      icon: 'BiLogOutCircle',
      link: 'logout'
    }
  ]

  return (
  <div id="sidebar" className={`${isOpen ? 'open' : ''} ${isHidden ? 'hide' : ''}`}>

      <section >
        <Link to="#" className="brand">
          <BiSmile/>
          {!isHidden && <span className="text">Flash Bank</span>}
        </Link>
        <ul className="side-menu top">
          {menuItems.map((item, index) => (
            <li key={index} className={index === activeIndex ? 'active' : ''}>
              <Link to={item.link} onClick={() => handleItemClick(index)}>
                {iconMapping[item.icon]}
                {!isHidden && <span className="text">{item.name}</span>}
              </Link>
            </li>
            ))}
          </ul>
          <ul className="side-menu">
      {bottomList.map((item, index) => (
        <li key={index}>
          <Link 
            to="#" 
            onClick={() => handleItemClick(index)}
            className={index === bottomList.length - 1 ? 'logout' : ''}
          >
            {iconMapping[item.icon]}
            {!isHidden && <span className="text">{item.name}</span>}
          </Link>
        </li>
      ))}
    </ul>
          </section>
        </div>
      );
    };
    
    export default Sidebar;