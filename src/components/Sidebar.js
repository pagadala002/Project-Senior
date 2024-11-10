import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
    <ul className="sidebar-nav">
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Education</li>
        <li>Science & Tech</li>
        <li>Entertainment</li>
        <li>Student Hubs</li>
      </ul>
    </div>
  );
}

export default Sidebar;
