// components/OrdersCalendarView.js
import React from "react";

function OrdersCalendarView() {
  // Mock data for orders on different dates
  const orders = [
    {
      id: 1,
      date: "2024-03-08",
      customerName: "Saniya Maner",
      status: "Pending",
    },
    {
      id: 2,
      date: "2024-03-09",
      customerName: "Asif Maner",
      status: "Completed",
    },
    {
      id: 3,
      date: "2024-03-07",
      customerName: "Sangam Bhosale",
      status: "Incomplete",
    },
    {
      id: 4,
      date: "2024-03-06",
      customerName: "Sumit Admane",
      status: "Completed",
    },
    // Add more orders here
  ];

  return (
    <div>
      <h2>Orders Calendar View</h2>
      <div className="calendar">
        {/* Calendar interface displaying orders */}
        {orders.map((order) => (
          <div key={order.id} className="calendar-item">
            <h3>{order.date}</h3>
            <p>{order.customerName}</p>
            <p>Status: {order.status}</p>
            {/* Add more order details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersCalendarView;
