// components/common/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
