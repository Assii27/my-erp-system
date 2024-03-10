// components/Dashboard.js

import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Product Summary:</h3>
        <ul>
          <li>Total number of products: 600</li>
          <li>Total number of orders: 70</li>
          {/* Add more Product Summary */}
          <li>Revenue for the month: Rs 10,000</li>
          <li>Number of pending orders: 10</li>
          {/* Add more Product Summary */}
        </ul>
      </div>
      <div>
        <h3>Quick Navigation:</h3>
        <ul>
          <li>
            <a href="/products">Manage Products</a>
          </li>
          <li>
            <a href="/orders">Manage Orders</a>
          </li>
          {/* Add more quick navigation links/buttons here */}
          <li>
            <a href="/calendar">View Orders Calendar</a>
          </li>
          <li>
            <a href="/analytics">View Sales Analytics</a>
          </li>
          {/* Add more quick navigation links/buttons here */}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
