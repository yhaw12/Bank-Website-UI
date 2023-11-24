import React from 'react';
import { Link } from 'react-router-dom';
import { BxsCalendarCheck, BxsGroup, BxsDollarCircle, BxChevronRight } from 'react-icons/bx';
import Navbar from '../Navbar/Navbar';
import '../Content/Content.css';

function Content() {
  return (
    <>
      <Navbar />
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb" id="breadcrumb">
              <li>
                <Link className="active" to="/">Home</Link>
              </li>
              <li><BxChevronRight /></li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="box-info">
          <li>
            <BxsCalendarCheck />
            <span className="text">
              <h3>03312343356677</h3>
              <p>Account Info</p>
            </span>
          </li>
          <li>
            <BxsGroup />
            <span className="text">
              <h3>$2834</h3>
              <p>Widthrawals</p>
            </span>
          </li>
          <li>
            <BxsDollarCircle />
            <span className="text">
              <h3>$2543</h3>
              <p>Total Transactions</p>
            </span>
          </li>
        </ul>
      </main>
    </>
  )
}

export default Content;